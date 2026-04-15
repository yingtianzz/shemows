import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah Thompson", rating: 5, text: "Amanda and her team are absolutely fantastic! My lawn has never looked better. So reliable and always on time. Highly recommend She Mows!", date: "2 weeks ago" },
  { name: "John Mitchell", rating: 5, text: "Been using She Mows for over a year now. Consistently great work and such a lovely team. The garden looks amazing every time.", date: "1 month ago" },
  { name: "Rachel King", rating: 5, text: "The before and after of my garden was incredible. They really go above and beyond. So happy with the results!", date: "3 weeks ago" },
  { name: "Mike Patterson", rating: 5, text: "Professional, punctual and the lawn always looks amazing. Best lawn service in the area by far.", date: "1 month ago" },
];

export default function FacebookReviews({ compact = false }: { compact?: boolean }) {
  const displayReviews = compact ? reviews.slice(0, 3) : reviews;

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          <div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-xs text-muted-foreground">5.0 · Facebook Reviews</p>
          </div>
        </div>
        <a
          href="https://www.facebook.com/shemows/reviews/?id=100063646847143&sk=reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Read all reviews →
        </a>
      </div>

      {/* Review Cards */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
        {displayReviews.map((r, i) => (
          <div key={i} className="bg-card rounded-xl p-5 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm">
                {r.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://www.facebook.com/shemows/reviews/?id=100063646847143&sk=reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1877F2] text-white font-bold text-sm hover:bg-[#166fe5] transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Read More on Facebook
        </a>
      </div>
    </div>
  );
}
