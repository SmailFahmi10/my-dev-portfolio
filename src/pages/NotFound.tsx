const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center px-5">
    <div>
      <p className="font-mono text-sm text-muted-foreground">Error 404</p>
      <h1 className="heading mt-2 text-3xl">Esta página no existe</h1>
      <p className="mt-3 text-muted-foreground">Puede que el enlace esté roto o que la dirección tenga una errata.</p>
      <a href="/" className="link-underline mt-6 inline-block font-medium">
        Volver al inicio
      </a>
    </div>
  </main>
);

export default NotFound;
