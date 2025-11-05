import React, { useState, useRef, useEffect } from 'react';
import { ImageCard } from '../components/ImageCard';
import { DescCard } from '../components/DescCard';
import { diseases } from '../data/diseases';
import * as tf from '@tensorflow/tfjs';
const roboflow = window.roboflow;

export const Classify = () => {
  const [progress, setProgress] = useState('idle');
  const [imgPreview, setImgPreview] = useState();
  const [predict, setPredict] = useState([]);
  const [webcam, setWebcam] = useState(false);
  const [loadWebcam, setLoadWebcam] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let model = null;

  const preProcess = (image) => {
    const imgNormalized = tf.tidy(() => {
      const imgTensor = tf.browser.fromPixels(image);
      const normalized = tf.scalar(1.0).sub(imgTensor.div(tf.scalar(255.0)));
      const batchDims = normalized.expandDims(0);
      const resized = tf.image.resizeBilinear(batchDims, [224, 224]);
      return resized;
    });
    return imgNormalized;
  };

  const classify = async () => {
    try {
      setProgress('process');
      const model = await tf.loadLayersModel('model/model.json');

      const img = document.getElementById('img');
      if (!img) {
        throw new Error('Image not found');
      }
      
      const imgNormalized = preProcess(img);

      const predictions = tf.tidy(() => {
        const output = model.predict(imgNormalized);
        
        // Get the probabilities array - output might be a 2D tensor
        const probs = Array.from(output.dataSync());
        
        // Find the index with maximum probability
        let maxProb = -Infinity;
        let maxIndex = 0;
        for (let i = 0; i < probs.length; i++) {
          if (probs[i] > maxProb) {
            maxProb = probs[i];
            maxIndex = i;
          }
        }
        
        // Get the confidence (probability) as percentage
        const confidence = Math.round(maxProb * 10000) / 100;
        
        console.log('Model output probabilities:', probs);
        console.log('Predicted class index:', maxIndex);
        console.log('Confidence:', confidence);
        console.log('Disease name:', diseases[maxIndex]?.name || 'Unknown');
        
        return [maxIndex, confidence];
      });

      // Clean up
      imgNormalized.dispose();

      setProgress('finish');
      setPredict(predictions);
    } catch (error) {
      console.error('Classification error:', error);
      setProgress((e) => (e = 'error'));
    }
  };

  const handleInput = (e) => {
    const urlPreview = URL.createObjectURL(e.target.files[0]);
    setImgPreview(urlPreview);
  };

  const getDetection = async () => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      try {
        const predictions = await model.detect(video);
        setPredict(
          predictions.map((disease) => {
            return [
              diseases.forEach((dss) =>
                dss.slug === disease.class ? dss.id : ''
              ),
              disease.confidence,
            ];
          })
        );
        const ctx = canvasRef.current.getContext('2d');
        renderDetection(predictions, ctx);
      } catch (error) {
        console.error(error);
        setProgress((e) => (e = 'error'));
        setLoadWebcam(false);
      }
    }
  };

  const loadModel = async () => {
    setLoadWebcam(true);
    const getAuth = await roboflow.auth({
      publishable_key: 'rf_IFsWxkQvH2fVforkhmsTrQExKzB2',
    });
    const loadModel = await getAuth.load({
      model: 'tomato-leaf-diseases',
      version: 1,
    });
    model = loadModel;
    setLoadWebcam((e) => (e = !e));
  };

  const runDetection = async () => {
    loadModel();
    setInterval(() => {
      getDetection();
    }, 50);
  };

  const renderDetection = (detections, ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    const x = 0;
    const y = 0;

    detections.forEach((prediction) => {
      const width = prediction.bbox.width;
      const height = prediction.bbox.height;

      ctx.strokeStyle = prediction.color;
      ctx.font = '18px Arial';
      ctx.lineWidth = 4;

      ctx.beginPath();
      ctx.fillStyle = prediction.color;
      ctx.fillText(prediction.class, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();
    });
  };

  useEffect(() => {
    if (webcam) {
      runDetection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcam]);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '100px 20px 40px 20px' }}>
      <div className="relative grid grid-cols-1 justify-center justify-items-center gap-8 p-4 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <ImageCard
          handleInput={handleInput}
          imgPreview={imgPreview}
          handleClick={classify}
          progressState={progress}
          useWebcam={webcam}
          handleWebcam={() => setWebcam(!webcam)}
          webcamRef={webcamRef}
          canvasRef={canvasRef}
          loadWebcam={loadWebcam}
        />
        <DescCard progressState={progress} result={predict} />
      </div>
    </div>
  );
};
