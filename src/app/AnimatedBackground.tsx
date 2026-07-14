export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center filter blur-[100px] sm:blur-[140px]">
        {/* Blob 1: Teal Glow - Anchored off the top-left */}
        <div className="absolute -top-[20%] -left-[20%] h-[70vh] w-[80vw] rounded-full bg-(--glow-1) animate-blob"></div>

        {/* Blob 2: Sky Blue Glow - Anchored off the top-right */}
        <div
          className="absolute -top-[10%] -right-[20%] h-[80vh] w-[70vw] rounded-full bg-(--glow-2) animate-blob"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Blob 3: Indigo Glow - Anchored off the bottom */}
        <div
          className="absolute -bottom-[30%] left-[-10%] h-[70vh] w-[100vw] rounded-full bg-(--glow-3) animate-blob"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>
    </div>
  );
}
