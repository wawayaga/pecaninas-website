export default function NotFound() {
  return (
    <section className="h-screen w-screen container flex flex-row columns-2 rows-1 items-center justify-center">
      <img src="/NotFound sticker.png" className="w-1/3"></img>
      <div className="w-1/3 font-mono">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-3xl font-bold">NOT FOUND</p>
      </div>
    </section>
  );
}
