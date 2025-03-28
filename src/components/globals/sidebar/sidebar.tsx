"use client";

import type React from "react";

import {
  BarChart2,
  ClipboardList,
  HelpCircle,
  Menu,
  MessagesSquare,
  Package,
  Receipt,
  Settings,
  PenToolIcon as Tool,
  Users2,
  Video,
  Wallet,
} from "lucide-react";

import { X } from "@phosphor-icons/react/dist/ssr";
import type { LucideIcon } from "lucide-react";
import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../logo";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleNavigation() {
    setIsMobileMenuOpen(false);
  }

  function NavItem({
    href,
    icon: Icon,
    children,
    disabled = false,
  }: {
    href: string;
    icon: LucideIcon;
    children: React.ReactNode;
    disabled?: boolean;
  }) {
    return (
      <Link
        href={disabled ? "#" : href}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          } else {
            handleNavigation();
          }
        }}
        className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
          disabled
            ? "opacity-50 cursor-not-allowed text-gray-400 dark:text-gray-500"
            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
        }`}
      >
        <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
        {children}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <nav
        className={`
                fixed inset-y-0 left-0 z-[70] w-full bg-background transform transition-transform duration-200 ease-in-out h-screen
                lg:translate-x-0 lg:static lg:w-58 border-r border-gray-200 dark:border-[#1F1F23]
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center pr-2 border-b border-gray-200 dark:border-[#1F1F23]">
            <Link
              href="/"
              rel="noopener noreferrer"
              className="h-16 px-6 flex items-center "
            >
              <Logo size="base" mode="full" />
            </Link>

            <button
              type="button"
              className="lg:hidden  h-min p-2  z-[70]  rounded-lg bg-white dark:bg-[#0F0F12] cursor-pointer shadow-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Principal
                </div>
                <div className="space-y-1">
                  <NavItem href="/dashboard" icon={Home}>
                    Dashboard
                  </NavItem>
                  <NavItem href="/servicos" icon={ClipboardList}>
                    Serviços
                  </NavItem>
                  <NavItem href="/clientes" icon={Users2}>
                    Clientes
                  </NavItem>
                  <NavItem href="/tecnicos" icon={Tool}>
                    Técnicos
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Estoque
                </div>
                <div className="space-y-1">
                  <NavItem href="/estoque" icon={Package}>
                    Peças
                  </NavItem>
                  <NavItem href="/fornecedores" icon={Users2}>
                    Fornecedores
                  </NavItem>
                  <NavItem href="/compras" disabled={true} icon={Receipt}>
                    Compras
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Financeiro
                </div>
                <div className="space-y-1">
                  <NavItem href="/financeiro" disabled={true} icon={Wallet}>
                    Pagamentos
                  </NavItem>
                  <NavItem href="/relatorios" disabled={true} icon={BarChart2}>
                    Relatórios
                  </NavItem>
                  <NavItem href="/notas" disabled={true} icon={Receipt}>
                    Notas Fiscais
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Comunicação
                </div>
                <div className="space-y-1">
                  <NavItem
                    href="/mensagens"
                    disabled={true}
                    icon={MessagesSquare}
                  >
                    Mensagens
                  </NavItem>
                  <NavItem href="/chamadas" disabled={true} icon={Video}>
                    Chamadas
                  </NavItem>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="space-y-1">
              <NavItem href="/configuracoes" icon={Settings}>
                Configurações
              </NavItem>
              <NavItem href="/ajuda" icon={HelpCircle}>
                Ajuda
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
