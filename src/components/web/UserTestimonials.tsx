import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "TikTok Content Creator",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=alexchen&gender=male",
    content:
      "This TikTok Comment Generator is a game-changer! I can create engaging replies in seconds instead of spending hours thinking of responses. The fake comment screenshots look so real that my followers can't tell the difference! 🔥",
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    role: "Social Media Influencer",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=mayarodriguez&gender=female",
    content:
      "As someone with 500K+ followers, I need to respond to hundreds of comments daily. This tool saves me so much time while keeping my responses authentic and engaging. The verified badge feature is perfect! 👑",
  },
  {
    id: 3,
    name: "Jordan Kim",
    role: "Marketing Specialist",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=jordankim&gender=male",
    content:
      "I use this for client content planning and mockups. The comment generator creates realistic TikTok-style responses that help us visualize engagement before posting. It's become essential for our strategy sessions! 💯",
  },
  {
    id: 4,
    name: "Sophie Williams",
    role: "TikTok Community Manager",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sophiewilliams&gender=female",
    content:
      "Managing multiple TikTok accounts was a nightmare until I found this tool. I can generate appropriate responses for different brand voices and create fake screenshots for training my team. Absolute lifesaver! ✨",
  },
  {
    id: 5,
    name: "Marcus Johnson",
    role: "Brand Manager",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=marcusjohnson&gender=male",
    content:
      "We use this for content planning and client presentations. The ability to create realistic comment scenarios helps us predict engagement and plan our content strategy. The download feature is brilliant! 🚀",
  },
  {
    id: 6,
    name: "Luna Patel",
    role: "Growth Strategist",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=lunapatel&gender=female",
    content:
      "This tool has revolutionized how I help creators grow their TikTok presence. I can quickly generate comment examples and create mockups that show clients what engagement looks like. It's my secret weapon! 💎",
  },
];

const StarRating = () => (
  <div className="flex mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ))}
  </div>
);

export default function UserTestimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              What Our Users Are Saying
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-8"
              >
                <StarRating />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-3"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    unoptimized
                  />
                  <div>
                    <div className="font-medium text-sm mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
