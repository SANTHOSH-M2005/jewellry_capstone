"use client";
import React, { useRef, useState, useEffect } from "react";

export default function DrawJewelryComponent() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [drawing, setDrawing] = useState(false);
  const [mode, setMode] = useState<"pen" | "eraser">("pen");
  const [history, setHistory] = useState<ImageData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.width = 500;
    canvas.height = 350;

    const ctx = canvas.getContext("2d")!;
    ctx.lineCap = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";

    ctxRef.current = ctx;
  }, []);

  const startDraw = (e: React.MouseEvent) => {
    saveHistory();
    ctxRef.current?.beginPath();
    ctxRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!drawing) return;

    const ctx = ctxRef.current!;
    ctx.strokeStyle = mode === "pen" ? "#000" : "#fff";
    ctx.lineWidth = mode === "pen" ? 3 : 12;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDraw = () => {
    ctxRef.current?.closePath();
    setDrawing(false);
  };

  const saveHistory = () => {
    const canvas = canvasRef.current!;
    const ctx = ctxRef.current!;
    setHistory((prev) => [...prev, ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  };

  const undo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current!;
    const ctx = ctxRef.current!;
    const prev = history[history.length - 1];
    ctx.putImageData(prev, 0, 0);
    setHistory(history.slice(0, -1));
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = ctxRef.current!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHistory([]);
  };

  const handleSearch = () => {
    const image = canvasRef.current?.toDataURL("image/png");
    console.log("Canvas Image:", image);
    // 👉 Send this image to backend → CLIP → Vector DB
  };

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-md">
      <p className="mb-4 text-lg font-medium text-gray-700">
        Draw your jewelry design
      </p>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="rounded-xl border border-gray-200 bg-white"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
      />

      {/* Tools */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setMode("pen")}
          className={`rounded-lg border px-4 py-2 ${
            mode === "pen"
              ? "border-yellow-500 text-yellow-600"
              : "border-gray-200"
          }`}
        >
          ✏️ Pen
        </button>

        <button
          onClick={() => setMode("eraser")}
          className={`rounded-lg border px-4 py-2 ${
            mode === "eraser"
              ? "border-yellow-500 text-yellow-600"
              : "border-gray-200"
          }`}
        >
          🧽 Eraser
        </button>

        <button
          onClick={undo}
          className="rounded-lg border border-gray-200 px-4 py-2"
        >
          ↩️ Undo
        </button>

        <button
          onClick={clearCanvas}
          className="rounded-lg border border-gray-200 px-4 py-2"
        >
          🗑️ Clear
        </button>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 text-lg font-semibold text-black transition hover:bg-yellow-600"
      >
        🔍 Find Matching Jewelry
      </button>
    </div>
  );
}
