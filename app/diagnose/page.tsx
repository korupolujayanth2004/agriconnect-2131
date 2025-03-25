"use client"; // Ensure this is a client-side component

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import VoiceControl from "@/components/voice-control";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import DiagnosisHistory to avoid SSR issues
const DiagnosisHistory = dynamic(() => import("@/components/diagnosis-history"), { ssr: false });

export default function DiagnosePage() {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleImageUpload = (event) => {
    if (event.target.files.length > 0) {
      setImageUploaded(true);
    }
  };

  const analyzeImage = () => {
    setAnalysisResult({
      disease: "Leaf Blight",
      suggestion: "Use fungicide and maintain proper irrigation.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Crop Diagnostics</h1>
          <p className="text-muted-foreground">Detect crop diseases instantly with our AI-powered tool</p>
        </div>
        <VoiceControl />
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Upload Crop Image</CardTitle>
          <CardDescription>Take a clear photo of the affected plant or upload an existing image</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border p-2 rounded-md" />
          <div>
            <Label htmlFor="crop-type">Crop Type (Optional)</Label>
            <Input id="crop-type" placeholder="e.g., Rice, Wheat, Cotton" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg" disabled={!imageUploaded} onClick={analyzeImage}>
            Analyze Image
          </Button>
        </CardFooter>
      </Card>

      {analysisResult && (
        <Card className="w-full bg-green-100 p-4 rounded-md">
          <CardHeader>
            <CardTitle>Diagnosis Result</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Possible Disease:</strong> {analysisResult.disease}</p>
            <p><strong>Suggested Treatment:</strong> {analysisResult.suggestion}</p>
          </CardContent>
        </Card>
      )}

      {/* Lazy load DiagnosisHistory to avoid hydration issues */}
      <DiagnosisHistory />
    </div>
  );
}
