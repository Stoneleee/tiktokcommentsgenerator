import React from 'react';
import Image from 'next/image';

export default function WhyUseTikTokCommentGenerator() {
  return (
    <section id="why-use" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="w-full md:w-1/2">
                <div>
                  <h2 className="text-4xl font-semibold font-bold mb-4">
                    Why Use TikTok Comment Generator?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    If you're struggling with creating TikTok comments and screenshots,{' '}
                    <a href="/en/tiktok-comment-generator" className="font-bold text-blue-600 hover:text-blue-800">
                      TikTok Comment Generator
                    </a>{' '}
                    is the solution you need. It helps you quickly generate engaging responses and 
                    authentic-looking images online, from simple replies to custom screenshots, 
                    all for free with unlimited access.
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full md:w-1/2">
                <div className="rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] text-left p-8">
                  <Image
                    className="rounded-lg w-full"
                    src="https://se-data-us-oss.oss-us-west-1.aliyuncs.com/se/easycomment/CommentGenerator/assets/images/Why-Use-TikTok-Comment-Generator-EasyComment.png"
                    alt="Why Use TikTok Comment Generator? - EasyComment"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
