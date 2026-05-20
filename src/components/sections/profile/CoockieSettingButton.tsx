"use client";

const CookieSettingsButton = () => {
  const openCookieSettings = () => {
    localStorage.removeItem("cookie-consent");

    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });

    window.location.reload();
  };

  return (
    <div>
      <p className="text-[12px] xl:text-xs text-muted">
        © {new Date().getFullYear()} Mahan. All Rights Reserved.
      </p>

      <button
        onClick={openCookieSettings}
        className="text-[12px] xl:text-xs text-muted hover:text-foreground transition-colors"
      >
        Change Cookie Preferences
      </button>
    </div>
  );
};

export default CookieSettingsButton;
