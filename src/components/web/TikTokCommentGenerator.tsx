"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronDown, Upload, User } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from 'react';

interface CommentData {
  username: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export default function TikTokCommentGenerator() {
  const [commentData, setCommentData] = useState<CommentData>({
    username: "",
    comment: "",
    verified: true,
  });
  const [usernameCount, setUsernameCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCommentData(prev => ({ ...prev, username: value }));
    setUsernameCount(value.length);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCommentData(prev => ({ ...prev, comment: value }));
    setCommentCount(value.length);
  };

  const handleVerifiedChange = (checked: boolean) => {
    setCommentData(prev => ({ ...prev, verified: checked }));
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCommentData(prev => ({ 
          ...prev, 
          avatar: event.target?.result as string 
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateRandom = () => {
    const randomUsernames = ["tiktok_user", "content_creator", "viral_video", "trending_now"];
    const randomComments = [
      "This is absolutely amazing! 🔥",
      "I can't stop watching this 😍",
      "The talent is unreal! 👏",
      "This made my day! 😂"
    ];
    
    setCommentData({
      username: randomUsernames[Math.floor(Math.random() * randomUsernames.length)],
      comment: randomComments[Math.floor(Math.random() * randomComments.length)],
      verified: Math.random() > 0.5,
    });
  };

  const handleDownload = (format: 'png' | 'jpg') => {
    console.log(`Downloading as ${format}`);
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
                        <Image
                          src={commentData.avatar}
                          alt="Avatar"
                          width={48}
                          height={48}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-full h-full text-gray-400" />
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleGenerateRandom}
                      className="h-8 px-3 text-xs"
                    >
                      Generate Random
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Username Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="verified" className="text-sm text-gray-500">
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
                  <Label htmlFor="comment" className="text-sm font-medium">Comment</Label>
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
                    onClick={() => handleDownload('png')}
                    className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90"
                  >
                    Download Comment (.png)
                  </Button>
                  <Button
                    onClick={() => handleDownload('jpg')}
                    className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90"
                  >
                    Download Comment (.jpg)
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
                          <div className="comment-container relative w-fit max-w-[280px]">
                            <div className="relative bg-white rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-0 pl-1 pr-2 py-2">
                              <div className="flex items-start gap-0">
                                <div className="flex-shrink-0 ml-1 mr-1">
                                  <span className="relative flex aspect-square h-10 w-10 shrink-0 rounded-full h-6 w-6 overflow-hidden bg-transparent">
                                    <span className="h-full w-full rounded-full flex items-center justify-center bg-transparent">
                                      {commentData.avatar ? (
                                        <Image
                                          src={commentData.avatar}
                                          alt="Avatar"
                                          width={24}
                                          height={24}
                                          className="w-full h-full rounded-full object-cover"
                                        />
                                      ) : (
                                        <User className="w-full h-full text-gray-400" />
                                      )}
                                    </span>
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1 text-[12px] leading-[1.2] whitespace-pre-wrap break-words">
                                  <div className="text-gray-400 font-medium break-words">
                                    <span className="inline align-baseline">Reply to </span>
                                    <span className="inline-flex items-center break-all align-baseline">
                                      {commentData.username || "username"}
                                      {commentData.verified && (
                                        <div className="inline-flex items-center justify-center w-[10px] h-[10px] bg-[#20D5EC] rounded-full ml-[2px] translate-y-[1px]">
                                          <Check className="w-[6px] h-[6px] text-white fill-current" />
                                        </div>
                                      )}
                                    </span>
                                    <span className="inline align-baseline"> comment</span>
                                  </div>
                                  <div className="text-gray-900 whitespace-pre-wrap break-words mt-[2px] align-baseline font-bold">
                                    {commentData.comment || "Write your own TikTok style comment and see what happens 😎"}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div 
                              className="bubble-triangle absolute left-0 bottom-[-11px] w-0 h-0 border-0 border-solid"
                              style={{
                                borderTop: "12px solid rgb(255, 255, 255)",
                                borderRight: "12px solid transparent"
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
