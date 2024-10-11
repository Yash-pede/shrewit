import BtnMovingBorder from "@/components/border-btn";
import { cn } from "@/lib/utils";
import CheckIcon from "@/public/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    altText: "Get started with",
    features: [
      "Up to 5 active users",
      "Unlimited product listings",
      "50 MB storage space",
      "Basic analytics",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 8999,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    altText: "Everything in the Free Plan, plus:",
    features: [
      "Up to 50 active users",
      "75 GB storage space",
      "Custom domain support",
      "Advanced reporting tools",
      "Priority support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19999,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    altText: "Everything in the Pro Plan, plus:",
    features: [
      "Unlimited active users",
      "100 GB storage space",
      "Dedicated account manager",
      "Custom feature development",
      "Comprehensive training and onboarding support",
      "Monthly performance insights and reviews",
      "24/7 support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="px-5 py-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-[580px] mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="heading-gradient">Pricing</h1>
            <p className="subheading">
              Free forever. Upgrade for unlimited tasks, better security, and
              exclusive features.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:items-end lg:flex-row lg:justify-center">
          {pricingTiers.map(
            (
              {
                title,
                monthlyPrice,
                buttonText,
                popular,
                inverse,
                features,
                altText,
              },
              index
            ) => (
              <div
                className={cn(
                  "card",
                  inverse === true && "bg-black border-black text-white"
                )}
                key={index}
              >
                <div className="flex justify-between">
                  <h3
                    className={cn(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <BtnMovingBorder className="">Popular</BtnMovingBorder>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ₹{monthlyPrice}
                  </span>
                  <span
                    className={cn(
                      "tracking-tighter font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={cn(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  <li
                    className={cn(
                      "text-sm text-black/50 font-medium",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {altText}
                  </li>
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-[24px_1fr] gap-4 text-sm"
                    >
                      <CheckIcon className="size-6" />
                      <span> {feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
