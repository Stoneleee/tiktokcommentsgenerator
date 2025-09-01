"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCommentDownload } from "@/hooks/useCommentDownload";
import {
  ChevronDown,
  Download,
  Upload,
  UserRound,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Check from "./CheckSvg";

interface CommentData {
  username: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export default function TikTokCommentGenerator() {
  const [commentData, setCommentData] = useState<CommentData>({
    username: "username",
    comment: "Write your own TikTok style comment and see what happens 😎",
    verified: true,
  });
  const [usernameCount, setUsernameCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Use the custom download hook
  const { previewRef, downloadSingleImage, downloadMultipleFormats } =
    useCommentDownload();

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAvatarDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCommentData((prev) => ({ ...prev, username: value }));
    setUsernameCount(value.length);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCommentData((prev) => ({ ...prev, comment: value }));
    setCommentCount(value.length);
  };

  const handleVerifiedChange = (checked: boolean) => {
    setCommentData((prev) => ({ ...prev, verified: checked }));
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target?.result as string;
        setCommentData((prev) => ({
          ...prev,
          avatar: base64Data,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateRandomAvatar = async (gender: "male" | "female") => {
    try {
      // Using DiceBear API for free avatars
      const seed = Math.random().toString(36).substring(7);
      const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&gender=${gender}`;

      // Convert image URL to base64
      const convertImageToBase64 = async (url: string): Promise<string> => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.crossOrigin = "anonymous"; // Enable CORS for cross-origin images

          img.onload = () => {
            try {
              // Create canvas to convert image to base64
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");

              if (!ctx) {
                reject(new Error("Could not get canvas context"));
                return;
              }

              // Set canvas dimensions to match image
              canvas.width = img.width;
              canvas.height = img.height;

              // Draw image to canvas
              ctx.drawImage(img, 0, 0);

              // Convert to base64
              const base64 = canvas.toDataURL("image/png");
              resolve(base64);
            } catch (error) {
              reject(error);
            }
          };

          img.onerror = () => {
            reject(new Error("Failed to load image"));
          };

          img.src = url;
        });
      };

      // Try to convert the primary avatar URL to base64
      try {
        const base64Avatar = await convertImageToBase64(avatarUrl);
        setCommentData((prev) => ({ ...prev, avatar: base64Avatar }));
      } catch (error) {
        console.log("Primary avatar failed, trying fallback...");

        // Fallback to a different avatar service if DiceBear fails
        const fallbackUrl = `https://avatars.dicebear.com/api/avataaars/${seed}.svg?gender=${gender}`;
        try {
          const fallbackBase64 = await convertImageToBase64(fallbackUrl);
          setCommentData((prev) => ({ ...prev, avatar: fallbackBase64 }));
        } catch (fallbackError) {
          console.error("Both avatar services failed:", fallbackError);
          // Fallback to default user icon
          setCommentData((prev) => ({ ...prev, avatar: undefined }));
        }
      }
    } catch (error) {
      console.error("Error generating avatar:", error);
      // Fallback to default user icon
      setCommentData((prev) => ({ ...prev, avatar: undefined }));
    }
  };

  const handleGenerateRandom = async (gender: "male" | "female") => {
    // Generate random avatar first
    await generateRandomAvatar(gender);
  };

  const handleDownload = async (format: "png" | "jpg") => {
    if (isDownloading) {
      return;
    }
    if (!commentData.username && !commentData.comment) {
      alert("Please enter a username and comment before downloading.");
      return;
    }

    setIsDownloading(true);
    try {
      const result = await downloadSingleImage(commentData, { format });
      if (result.success) {
        console.log(`Successfully downloaded as ${format}: ${result.filename}`);
      } else {
        alert(`Failed to download image: ${result.error}`);
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("An error occurred while downloading. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadAll = async () => {
    if (isDownloading) {
      return;
    }
    if (!commentData.username && !commentData.comment) {
      alert("Please enter a username and comment before downloading.");
      return;
    }

    setIsDownloading(true);
    try {
      const result = await downloadMultipleFormats(commentData, ["png", "jpg"]);
      if (result.success) {
        console.log(`Successfully downloaded all formats: ${result.filename}`);
      } else {
        alert(`Failed to download images: ${result.error}`);
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("An error occurred while downloading. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="generator" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Form */}
              <div className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <div className="w-full h-full flex items-center justify-center bg-transparent">
                      {commentData.avatar ? (
                        <div className="w-full h-full rounded-full border-2 border-gray-200 overflow-hidden">
                          <Image
                            src={commentData.avatar}
                            alt="Avatar"
                            width={48}
                            height={48}
                            className="w-full h-full rounded-full object-cover"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-50">
                          <UserRound className="w-full h-full text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="h-8 px-3 text-xs"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                    />
                    <div className="relative" ref={dropdownRef}>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setIsAvatarDropdownOpen(!isAvatarDropdownOpen)
                        }
                        className="h-8 px-3 text-xs flex items-center"
                      >
                        Generate Random
                        {isAvatarDropdownOpen ? (
                          <ChevronUp className="h-4 w-4 ml-2" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-2" />
                        )}
                      </Button>

                      {/* Gender Selection Dropdown */}
                      {isAvatarDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <div className="p-2">
                            <div className="space-y-1">
                              <button
                                onClick={() => {
                                  setIsAvatarDropdownOpen(false);
                                  handleGenerateRandom("male");
                                }}
                                className="w-full text-left px-2 py-1 text-xs rounded hover:bg-gray-100 text-gray-700"
                              >
                                Male
                              </button>
                              <button
                                onClick={() => {
                                  setIsAvatarDropdownOpen(false);
                                  handleGenerateRandom("female");
                                }}
                                className="w-full text-left px-2 py-1 text-xs rounded hover:bg-gray-100 text-gray-700"
                              >
                                Female
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Username Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Label
                        htmlFor="verified"
                        className="text-sm text-gray-500"
                      >
                        Verified
                      </Label>
                      <Switch
                        id="verified"
                        checked={commentData.verified}
                        onCheckedChange={handleVerifiedChange}
                      />
                    </div>
                  </div>
                  <Input
                    id="username"
                    maxLength={24}
                    placeholder="Enter username (max 24 characters)"
                    value={commentData.username}
                    onChange={handleUsernameChange}
                    className="h-9"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {usernameCount}/24 characters
                  </div>
                </div>

                {/* Comment Section */}
                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-sm font-medium">
                    Comment
                  </Label>
                  <Textarea
                    id="comment"
                    maxLength={150}
                    placeholder="Write your comment (max 150 characters)"
                    value={commentData.comment}
                    onChange={handleCommentChange}
                    className="min-h-[80px]"
                  />
                  <div className="text-xs text-gray-500 mt-1 mb-6">
                    {commentCount}/150 characters
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => handleDownload("png")}
                    disabled={isDownloading}
                    className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90 disabled:opacity-50"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Comment (.png)
                  </Button>
                  <Button
                    onClick={() => handleDownload("jpg")}
                    disabled={isDownloading}
                    className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90 disabled:opacity-50"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Comment (.jpg)
                  </Button>
                  <Button
                    onClick={handleDownloadAll}
                    disabled={isDownloading}
                    variant="outline"
                    className="w-full border-[#0095F6] text-[#0095F6] hover:bg-[#0095F6] hover:text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download All Formats (.zip)
                  </Button>
                </div>
              </div>

              {/* Right Column - Preview */}
              <div className="flex justify-center items-start">
                <div className="relative mx-auto">
                  <div className="relative w-[320px] h-[650px]">
                    <Image
                      alt="TikTok Mobile Frame"
                      width={320}
                      height={650}
                      className="w-full h-full object-contain"
                      src="/images/tiktok-mobile-frame.svg"
                    />
                    <div className="absolute inset-0 pt-10 pb-12">
                      <div className="relative h-full">
                        <div className="absolute top-16 left-5 right-4 max-w-[270px]">
                          <div
                            ref={previewRef}
                            className="comment-container relative w-fit max-w-[280px]"
                          >
                            <div className="relative bg-white rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-0 pl-1 pr-2 py-2">
                              <div className="flex items-start gap-0">
                                <div className="flex flex-shrink-0 ml-1 mr-1">
                                  <span className="relative flex aspect-square shrink-0 rounded-full h-6 w-6 overflow-hidden bg-transparent">
                                    <span className="h-full w-full rounded-full flex items-center justify-center bg-transparent">
                                      {commentData.avatar ? (
                                        <div className="w-full h-full rounded-full border border-gray-200 overflow-hidden">
                                          <Image
                                            src={commentData.avatar}
                                            alt="Avatar"
                                            width={24}
                                            height={24}
                                            className="w-full h-full rounded-full object-cover"
                                            unoptimized
                                          />
                                        </div>
                                      ) : (
                                        <div className="w-full h-full rounded-full border border-gray-200 flex items-center justify-center bg-gray-50">
                                          <UserRound className="w-full h-full text-gray-400" />
                                        </div>
                                      )}
                                    </span>
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1 text-[12px] leading-[1.2] whitespace-pre-wrap break-words">
                                  <div className="text-gray-400 font-medium break-words">
                                    <span className="inline align-baseline">
                                      Reply to{" "}
                                    </span>
                                    <span className="inline-flex items-center break-all align-baseline">
                                      {commentData.username}
                                      {"'s"}
                                      {commentData.verified ? (
                                        <>
                                          {" "}
                                          <Check />
                                        </>
                                      ) : null}
                                    </span>
                                    <span className="inline align-baseline">
                                      {" "}
                                      comment
                                    </span>
                                  </div>
                                  <div className="text-gray-900 whitespace-pre-wrap break-words mt-[2px] align-baseline font-bold">
                                    {commentData.comment ||
                                      "Write your own TikTok style comment and see what happens 😎"}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="bubble-triangle absolute left-0 bottom-[-11px] w-0 h-0 border-0 border-solid"
                              style={{
                                borderTop: "12px solid rgb(255, 255, 255)",
                                borderRight: "12px solid transparent",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
