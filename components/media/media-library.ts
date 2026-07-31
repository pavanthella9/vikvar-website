export type VikvarMediaItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  sourcePage: string;
  credit: string;
};

export const vikvarMedia = {
  teamOffice: {
    src: "https://images.unsplash.com/photo-1770777843445-2a1621b1201d?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    alt: "Technology professionals working together in a modern office",
    title: "Collaborative technology teams",
    description:
      "Representative imagery for team expansion, recruiting, and distributed delivery.",
    sourcePage:
      "https://unsplash.com/photos/four-people-working-at-desks-in-a-modern-office-LycaA7rWsHc",
    credit: "Photo by Beatriz Cattel on Unsplash",
  },
  developerWorkspace: {
    src: "https://images.unsplash.com/photo-1759884247194-f1fd2144951b?auto=format&fit=crop&fm=jpg&q=82&w=1600",
    alt: "Software professional working across multiple computer screens",
    title: "Application engineering",
    description:
      "Representative imagery for software development, data, and technology delivery.",
    sourcePage:
      "https://unsplash.com/photos/woman-working-on-computers-in-an-office-4G3vzMnC34M",
    credit: "Photo by Compagnons on Unsplash",
  },
  consultingWhiteboard: {
    src: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&fm=jpg&q=82&w=1600",
    alt: "Technology consultant presenting ideas beside a whiteboard",
    title: "Consulting and planning",
    description:
      "Representative imagery for technology consulting, discovery, and transformation planning.",
    sourcePage:
      "https://unsplash.com/photos/smiling-woman-presenting-at-whiteboard-TXxiFuQLBKQ",
    credit: "Photo by ThisisEngineering on Unsplash",
  },
  deliveryWorkflow: {
    src: "https://images.unsplash.com/photo-1754039985001-ccafee437736?auto=format&fit=crop&fm=jpg&q=82&w=1600",
    alt: "Digital delivery workspace with code, planning notes, and a task checklist",
    title: "Cloud and delivery workflows",
    description:
      "Representative imagery for DevOps, automation, cloud, and delivery operations.",
    sourcePage:
      "https://unsplash.com/photos/developer-working-on-multiple-screens-in-a-dark-office-v9iowyOH7QQ",
    credit: "Photo by Jakub Żerdzicki on Unsplash",
  },
} satisfies Record<string, VikvarMediaItem>;
