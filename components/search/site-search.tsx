"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { searchItems } from "./search-data";

export function SiteSearch() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return searchItems;
    }

    return searchItems
      .map((item) => {
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        const category = item.category.toLowerCase();
        const keywords = item.keywords.join(" ").toLowerCase();

        let score = 0;

        if (title === normalizedQuery) score += 100;
        if (title.startsWith(normalizedQuery)) score += 50;
        if (title.includes(normalizedQuery)) score += 30;
        if (category.includes(normalizedQuery)) score += 20;
        if (keywords.includes(normalizedQuery)) score += 15;
        if (description.includes(normalizedQuery)) score += 10;

        const words = normalizedQuery.split(/\s+/).filter(Boolean);
        words.forEach((word) => {
          if (title.includes(word)) score += 12;
          if (keywords.includes(word)) score += 8;
          if (description.includes(word)) score += 4;
        });

        return { item, score };
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((result) => result.item);
  }, [normalizedQuery]);

  return (
    <div>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search services, careers, cloud, recruiting..."
          aria-label="Search the Vikvar Technologies website"
          className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-12 text-base text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          autoFocus
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-700" aria-live="polite">
          {normalizedQuery
            ? `${results.length} result${results.length === 1 ? "" : "s"} found`
            : "Browse all website pages"}
        </p>
        {normalizedQuery ? (
          <p className="text-sm text-slate-500">
            Search: <span className="font-semibold text-slate-700">{query}</span>
          </p>
        ) : null}
      </div>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {results.map((item) => (
            <article
              key={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                {item.category}
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:text-blue-900"
              >
                Open page
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <Search className="mx-auto h-8 w-8 text-slate-400" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold text-slate-950">
            No matching pages found
          </h2>
          <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
            Try a broader term such as recruiting, staff augmentation, cloud,
            careers, applications, offshore, or contact.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-6 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            View all pages
          </button>
        </div>
      )}
    </div>
  );
}
