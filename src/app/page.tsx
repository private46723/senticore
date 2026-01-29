export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background">
      <div className="relative group">
        {/* Abstract decorative shape in the background */}
        <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-700"></div>
        
        <h1 className="relative font-headline text-6xl md:text-8xl font-bold tracking-tight text-primary animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          Merhaba Dünya
        </h1>
        
        <p className="relative mt-4 text-center text-muted-foreground font-body text-lg md:text-xl animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000 fill-mode-both">
          Simple Page projesine hoş geldiniz.
        </p>
      </div>
    </main>
  );
}