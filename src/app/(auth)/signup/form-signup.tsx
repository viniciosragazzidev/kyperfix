"use client";

import DescText from "@/components/globals/desc_text";
import Logo from "@/components/globals/logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Envelope,
  Eye,
  EyeSlash,
  Lock,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Define the validation schema with Zod
const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirmPassword: z.string(),
    termsAccepted: z.literal(true, {
      errorMap: () => ({
        message: "Você precisa aceitar os termos para continuar",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

// Infer the type from the schema
type SignUpFormValues = z.infer<typeof signUpSchema>;

const FormSignup = () => {
  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Initialize react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {},
  });

  // Handle form submission
  const onSubmit = async (data: SignUpFormValues) => {
    try {
      // Here you would typically call your registration API
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success toast
      toast.success("Cadastro realizado com sucesso", {
        description: "Sua conta foi criada com sucesso",
      });
    } catch (error: unknown) {
      // Show error toast
      console.log("Error:", error);

      toast.error("Erro ao criar conta", {
        description: "Verifique seus dados e tente novamente",
      });
    }
  };

  // Show validation errors in toast when form is submitted with errors
  const onError = () => {
    if (Object.keys(errors).length > 0) {
      toast.error("Erro de validação", {
        description: "Por favor, verifique os campos do formulário",
      });
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8,
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full max-w-sm">
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-8"
      >
        <Logo size="lg" mode="simple" />
        <motion.h1
          className="scroll-m-20 mt-7 text-3xl font-bold tracking-tight text-black dark:text-white text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Junte-se a Kyper
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <DescText>
            Informe seus dados de acesso abaixo para continuar.
          </DescText>
        </motion.div>
      </motion.div>
      <motion.form
        className="mt-8 space-y-5"
        onSubmit={handleSubmit(onSubmit, onError)}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="form-group space-y-4" variants={itemVariants}>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome"
            icon={User}
            {...register("name")}
          />
        </motion.div>

        <motion.div className="form-group space-y-4" variants={itemVariants}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            icon={Envelope}
            {...register("email")}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          variants={itemVariants}
        >
          <div className="form-group space-y-4">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                icon={Lock}
                {...register("password")}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
              >
                {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="form-group space-y-4">
            <Label htmlFor="confirmPassword">Confirmar Senha</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                icon={Lock}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={toggleConfirmPasswordVisibility}
                tabIndex={-1}
              >
                {showConfirmPassword ? (
                  <EyeSlash size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          variants={itemVariants}
        >
          <Checkbox
            id="termsAccepted"
            {...register("termsAccepted")}
            onCheckedChange={(checked) => {
              // This explicitly sets the value in the form
              if (checked === true || checked === false) {
                const event = {
                  target: {
                    name: "termsAccepted",
                    value: checked,
                  },
                };
                register("termsAccepted").onChange(event);
              }
            }}
          />
          <Label
            htmlFor="termsAccepted"
            className="text-sm font-normal cursor-pointer flex "
          >
            <span className="">
              Eu aceito os{" "}
              <a href="/terms" className="text-primary hover:underline">
                termos de uso e política de privacidade
              </a>
            </span>{" "}
          </Label>
        </motion.div>

        <motion.div variants={buttonVariants}>
          <Button
            className="w-full bg-foreground/10 cursor-pointer group"
            variant={"outline"}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            <ArrowRight size={20} className="ml-2 group-hover:-rotate-12" />
          </Button>
        </motion.div>
      </motion.form>

      <motion.div
        className="mt-6 text-center text-sm"
        variants={footerVariants}
        initial="hidden"
        animate="show"
      >
        Já tem uma conta?{" "}
        <a href="/signin" className="font-medium text-primary hover:underline">
          Entrar
        </a>
      </motion.div>
    </div>
  );
};

export default FormSignup;
