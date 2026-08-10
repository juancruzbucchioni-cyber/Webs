import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  stats: string;
  href?: string;
  actionText?: string;
  themeColor?: string;
  onActionClick?: () => void;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag = "✨",
      stats,
      href = "#",
      actionText = "Ver Sitio Web",
      themeColor = "270 70% 35%",
      onActionClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={
          {
            "--theme-color": themeColor,
          } as React.CSSProperties
        }
        className={cn("group w-full h-full cursor-pointer", className)}
        {...props}
      >
        <a
          href={href}
          target={href && href !== "#" ? "_blank" : undefined}
          rel={href && href !== "#" ? "noreferrer" : undefined}
          onClick={(e) => {
            if (onActionClick && (!href || href === "#")) {
              e.preventDefault();
              onActionClick();
            }
          }}
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-lg 
                     transition-all duration-500 ease-in-out 
                     group-hover:scale-[1.03]"
          style={{
            boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`,
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-top 
                       transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.6) 40%, transparent 75%)`,
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white min-h-[360px]">
            <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              {location} <span className="text-xl">{flag}</span>
            </h3>
            <p className="text-sm text-white/80 mt-1 font-medium">{stats}</p>

            {/* Action Button */}
            <div
              className="mt-6 flex items-center justify-between bg-[hsl(var(--theme-color)/0.3)] backdrop-blur-md border border-[hsl(var(--theme-color)/0.5)] 
                           rounded-xl px-4 py-3 
                           transition-all duration-300 
                           group-hover:bg-[hsl(var(--theme-color)/0.6)] group-hover:border-[hsl(var(--theme-color)/0.8)]"
            >
              <span className="text-sm font-semibold tracking-wide">
                {actionText}
              </span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);

DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
