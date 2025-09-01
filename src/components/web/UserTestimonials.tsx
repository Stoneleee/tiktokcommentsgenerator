import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

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
    name: "Sarah",
    role: "Social Media Manager",
    avatar: "https://se-data-us-oss.oss-us-west-1.aliyuncs.com/se/easycomment/FacebookCommentPicker/assets/images/Emma-Richards.webp",
    content: "Can't believe how much time this TikTok Comment Generator saves me! Used to take forever to reply to everyone, now it's so quick and the responses actually sound natural."
  },
  {
    id: 2,
    name: "Mike",
    role: "Content Creator",
    avatar: "https://se-data-us-oss.oss-us-west-1.aliyuncs.com/se/easycomment/FacebookCommentPicker/assets/images/Michael-Turner.webp",
    content: "The fake screenshots look exactly like real TikTok comments - this is perfect for my content planning! Super easy to use and makes my thumbnails look way better."
  },
  {
    id: 3,
    name: "Emma",
    role: "Digital Marketing Specialist",
    avatar: "https://se-data-us-oss.oss-us-west-1.aliyuncs.com/se/easycomment/FacebookCommentPicker/assets/images/Sarah-Lee.webp",
    content: "After evaluating multiple solutions, I can confidently say this TikTok Comment Generator delivers exceptional results. The AI-generated responses maintain professionalism while staying authentic."
  },
  {
    id: 4,
    name: "David",
    role: "TikToker",
    avatar: "https://se-data-us-oss.oss-us-west-1.aliyuncs.com/se/easycomment/FacebookCommentPicker/assets/images/David-Thompson.webp",
    content: "Love how real these TikTok screenshots look! Been using them for my mock-ups and no one can tell the difference. Really helpful for planning content and testing ideas."
  },
  {
    id: 5,
    name: "Chan",
    role: "Community Manager",
    avatar: "https://se-data-us-oss.oss-us-west-1.aliyuncs.com/se/easycomment/FacebookCommentPicker/assets/images/Jessica-Williams.webp",
    content: "The TikTok Comment Generator has transformed how we handle client engagement. It's efficient, professional, and helps maintain consistent communication across all accounts."
  },
  {
    id: 6,
    name: "James",
    role: "Social Media Creator",
    avatar: "https://se-data-us-oss.oss-us-west-1.aliyuncs.com/se/easycomment/FacebookCommentPicker/assets/images/Alex-Martin.webp",
    content: "Such a time saver! The comment generator helps me keep up with all my followers without spending hours on replies. Plus the fake comments feature is amazing for previews 💰."
  }
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
            <h2 className="text-4xl font-semibold font-bold mb-4">
              What Our Users Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-8"
              >
                <StarRating />
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-3"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-medium text-sm mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
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
