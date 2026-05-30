import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../button";
import { Mail, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "../../../server/email";
import { contactSchema, type ContactInput } from "../../../lib/contact-schema";
import { useAppForm } from "../../../lib/form";

const SCOPES = ['System Architecture', 'Full-stack Development', 'Consulting', 'Other'] as const;

const Contact: FC = () => {
  const { t } = useTranslation("index-page");
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const form = useAppForm({
    defaultValues: {
      name: '',
      email: '',
      scope: 'System Architecture' as ContactInput['scope'],
      message: '',
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      setStatus('idle');
      try {
        await sendContactEmail({ data: value });
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      }
    },
  });

  return (
    <section className="py-section-gap bg-on-surface text-white" id="contact">
      <div className="max-w-[1440px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-stack-md">
          <span className="font-label-caps text-label-caps text-secondary-fixed uppercase">{t("contact.label")}</span>
          <h2 className="font-display-xl text-display-xl leading-none">
            {t("contact.title")}
          </h2>
          <p className="text-surface-container-highest font-body-lg text-body-lg max-w-md pt-8">
            {t("contact.description")}
          </p>
          <div className="pt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail size={20} className="text-primary-fixed" />
              </div>
              <span className="font-headline-sm text-headline-sm">{t("contact.email")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin size={20} className="text-primary-fixed" />
              </div>
              <span className="font-headline-sm text-headline-sm">{t("contact.location")}</span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
          {status === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center gap-6 py-16 text-center">
              <div className="flex p-5 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                <CheckCircle2 size={32} className="text-green-400" />
              </div>
              <div className="space-y-2">
                <p className="font-headline-sm text-headline-sm text-white">{t("contact.successTitle")}</p>
                <p className="font-body-md text-sm text-white/60">{t("contact.successSubtitle")}</p>
              </div>
            </div>
          ) : (
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              {status === 'error' && (
                <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
                  <div>
                    <p className="font-label-caps text-[10px] uppercase text-red-400">{t("contact.errorTitle")}</p>
                    <p className="font-body-md text-sm text-white/80">{errorMsg}</p>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-stack-md">
                <form.AppField
                  name="name"
                  children={(field) => <field.TextField label={String(t("contact.fieldName"))} placeholder={String(t("contact.fieldNamePlaceholder"))} />}
                />
                <form.AppField
                  name="email"
                  children={(field) => (
                    <field.TextField label={String(t("contact.fieldEmail"))} placeholder={String(t("contact.fieldEmailPlaceholder"))} type="email" />
                  )}
                />
              </div>
              <form.AppField
                name="scope"
                children={(field) => (
                  <field.SelectField label={String(t("contact.fieldScope"))} options={SCOPES} />
                )}
              />
              <form.AppField
                name="message"
                children={(field) => (
                  <field.TextareaField
                    label={String(t("contact.fieldMessage"))}
                    placeholder={String(t("contact.fieldMessagePlaceholder"))}
                    rows={4}
                  />
                )}
              />
              <form.Subscribe
                selector={(state) => state.isSubmitting}
                children={(isSubmitting) => (
                  <Button type="submit" fullWidth size="lg" color="secondary" disabled={isSubmitting}>
                    {isSubmitting ? t("contact.submitting") : t("contact.submit")}
                  </Button>
                )}
              />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
