"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Smartphone,
  Timer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface ListItem {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconStyle: string;
  date: string;
  time?: string;
  amount?: string;
  status: "pending" | "in-progress" | "completed";
  progress?: number;
  clientName?: string;
  itemName?: string;
  technician?: string;
}

interface List03Props {
  items?: ListItem[];
  className?: string;
  delay?: number; // Add a delay prop with default value
}

const iconStyles = {
  service: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  payment:
    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  inventory:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
};

const statusConfig = {
  pending: {
    icon: Timer,
    class: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  "in-progress": {
    icon: AlertCircle,
    class: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  completed: {
    icon: CheckCircle2,
    class: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
};

const ITEMS: ListItem[] = [
  {
    id: "1",
    title: "Ordem de Serviço #1082",
    subtitle: "Reparo de tela quebrada - iPhone 13 Pro",
    icon: Smartphone,
    iconStyle: "service",
    date: "Aberto: 15 Jun 2023",
    amount: "R$ 450,00",
    status: "in-progress",
    progress: 65,
    clientName: "Maria Silva",
    itemName: "iPhone 13 Pro",
    technician: "Carlos Oliveira",
  },
  /* {
    id: "2",
    title: "Entrada de Caixa",
    subtitle: "Pagamento de serviço - Notebook Dell",
    icon: CreditCard,
    iconStyle: "payment",
    date: "Recebido: 14 Jun 2023",
    amount: "R$ 320,00",
    status: "completed",
    clientName: "João Pereira",
    itemName: "Notebook Dell Inspiron",
  },
 */
  {
    id: "3",
    title: "Diagnóstico Técnico",
    subtitle: "Análise de problemas de hardware",
    icon: Wrench,
    iconStyle: "inventory",
    date: "Agendado: 16 Jun 2023",
    time: "14:30",
    status: "pending",
    progress: 0,
    clientName: "Pedro Santos",
    itemName: "PC Gamer Customizado",
    technician: "André Martins",
    amount: "R$ 250,00",
  },
];

export default function List03({
  items = ITEMS,
  className,
  delay = 1,
}: List03Props) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Start animation after the specified delay when component comes into view
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay * 700); // Convert to milliseconds

      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.33, 0.1, 0.1, 1], // Custom easing for smooth ending
      },
    },
  };

  return (
    <div
      className={cn("w-full h-full overflow-x-auto scrollbar-none", className)}
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={shouldAnimate ? "show" : "hidden"}
        className="flex gap-3 min-w- h-full p-1"
      >
        {items.map((item) => (
          <motion.div
            variants={itemVariants}
            key={item.id}
            className={cn(
              "flex flex-col h-min",
              "w-[280px] shrink-0",
              "bg-white dark:bg-zinc-900/20",
              "rounded-xl",
              "border border-zinc-100 dark:border-zinc-800",
              "hover:border-zinc-200 dark:hover:border-zinc-700",
              "transition-all duration-200",
              "shadow-sm backdrop-blur-xl"
            )}
          >
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    iconStyles[item.iconStyle as keyof typeof iconStyles]
                  )}
                >
                  <item.icon className="w-4 h-4" />
                </div>
                <div
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5",
                    statusConfig[item.status].bg,
                    statusConfig[item.status].class
                  )}
                >
                  {React.createElement(statusConfig[item.status].icon, {
                    className: "w-3.5 h-3.5",
                  })}
                  {item.status === "pending" && "Pendente"}
                  {item.status === "in-progress" && "Em Andamento"}
                  {item.status === "completed" && "Concluído"}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {item.clientName && (
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">
                    Cliente:
                  </span>
                  <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                    {item.clientName}
                  </span>
                </div>
              )}

              {item.itemName && (
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">
                    Item:
                  </span>
                  <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                    {item.itemName}
                  </span>
                </div>
              )}

              {typeof item.progress === "number" && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-600 dark:text-zinc-400">
                      Progresso
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {item.amount && (
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {item.amount}
                  </span>
                  {item.id === "2" ? (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      recebido
                    </span>
                  ) : item.id === "3" ? (
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                      custo
                    </span>
                  ) : (
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">
                      valor
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-center text-xs text-zinc-600 dark:text-zinc-400">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                <span>{item.date}</span>
                {item.time && <span className="ml-1">às {item.time}</span>}
              </div>
            </div>

            <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800">
              <button
                className={cn(
                  "w-full flex items-center justify-center gap-2",
                  "py-2.5 px-3",
                  "text-xs font-medium",
                  "text-zinc-600 dark:text-zinc-400",
                  "hover:text-zinc-900 dark:hover:text-zinc-100",
                  "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                  "transition-colors duration-200"
                )}
              >
                Ver Detalhes
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
