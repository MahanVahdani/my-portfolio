"use client";

import { m, AnimatePresence } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio.config";
import { useContactForm } from "@/hooks/useContactForm";

import GlassCard from "@ui/GlassCard";
import FormField from "@ui/FormField";
import Grid from "@ui/Grid";
import GridItem from "@ui/GridItem";
import Button from "@ui/Button";

export default function ContactForm() {
  const { register, handleSubmit, errors, watch, onSubmit, isDisabled, current, submitState } =
    useContactForm();

  return (
    <GlassCard className="p-6 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot field — silently discards bot submissions */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...register("website")}
        />

        <Grid>
          {portfolioConfig.contactFields.map((field) => (
            <GridItem key={field.name} gridSpan={field.gridSpan}>
              <FormField
                key={field.name}
                field={field}
                register={register}
                error={errors[field.name]?.message}
                value={watch(field.name)}
              />
            </GridItem>
          ))}
        </Grid>

        <div className="pt-8">
          <Button
            type="submit"
            variant={submitState === "success" ? "outlined" : "primary"}
            disabled={isDisabled}
            className="w-full md:w-auto relative overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={submitState}
                className="inline-flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {current.icon}
                {current.label}
              </m.span>
            </AnimatePresence>
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}
