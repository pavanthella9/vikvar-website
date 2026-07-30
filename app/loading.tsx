export default function Loading() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-20"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="w-full max-w-md text-center">
        <div
          className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-700"
          aria-hidden="true"
        />
        <h1 className="mt-6 text-xl font-bold text-slate-950">
          Loading Vikvar Technologies
        </h1>
        <p className="mt-3 leading-7 text-slate-600">
          Please wait while the requested page is prepared.
        </p>
      </div>
    </main>
  );
}
