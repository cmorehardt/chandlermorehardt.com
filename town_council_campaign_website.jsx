import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Heart, Shield, Home, Users, CheckCircle2 } from "lucide-react";

export default function TownCouncilCampaignWebsite() {
  const priorities = [
    {
      icon: Home,
      title: "Keep Silverthorne Affordable",
      text: "Support practical housing solutions, protect the character of our neighborhoods, and make sure local families can continue to build their lives here.",
    },
    {
      icon: Users,
      title: "Put Families First",
      text: "Champion parks, recreation, child-friendly community spaces, and policies that help Silverthorne stay welcoming for working families and young kids.",
    },
    {
      icon: Shield,
      title: "Support a Safe Community",
      text: "Invest in thoughtful planning, strong partnerships, and infrastructure that helps neighbors feel safe, connected, and prepared for the future.",
    },
  ];

  const values = [
    "Local leadership grounded in community",
    "Practical solutions over politics",
    "Family-friendly decision making",
    "A strong future for locals",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-10 md:grid-cols-2"
          >
            <div>
              <Badge className="mb-4 rounded-full px-4 py-1 text-sm">Silverthorne Town Council</Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Chandler Morehardt for Town Council
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                My family and I are proud to call Silverthorne home. I’m running to help keep our town affordable, family-friendly, and a safe community where locals can thrive.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-2xl px-6 py-6 text-base">
                  Support the Campaign
                </Button>
                <Button variant="outline" className="rounded-2xl px-6 py-6 text-base">
                  Get Involved
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Silverthorne, Colorado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>chandler.morehardt@gmail.com</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-white p-4 shadow-2xl ring-1 ring-slate-200">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/80">Campaign Priorities</p>
                  <h2 className="mt-3 text-3xl font-semibold">A stronger future for Silverthorne</h2>
                  <div className="mt-6 space-y-4">
                    {values.map((value) => (
                      <div key={value} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                        <p className="text-sm leading-6">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {priorities.map((priority, index) => {
            const Icon = priority.icon;
            return (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              >
                <Card className="h-full rounded-[2rem] border-0 shadow-lg shadow-slate-200/60">
                  <CardContent className="p-7">
                    <div className="mb-5 inline-flex rounded-2xl bg-slate-100 p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{priority.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{priority.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-[2rem] border-0 shadow-lg shadow-slate-200/60">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Meet Chandler</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A local dad invested in Silverthorne’s future</h2>
              <p className="mt-6 text-base leading-8 text-slate-700">
                As a local dad with young kids, Chandler understands how much the decisions made today shape the kind of town families experience tomorrow. He believes Silverthorne can grow in a way that stays grounded in local values, supports working families, and preserves what makes this community special.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                His campaign is focused on listening well, building practical solutions, and helping ensure Silverthorne remains a place where neighbors know each other, children can thrive, and locals have a voice in the future of the town.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-0 bg-slate-900 text-white shadow-lg shadow-slate-300/40">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 text-slate-300">
                <Heart className="h-5 w-5" />
                <p className="text-sm uppercase tracking-[0.2em]">Why I’m Running</p>
              </div>
              <blockquote className="mt-6 text-2xl font-semibold leading-10">
                “I’m running to help keep Silverthorne affordable, family-friendly, and a safe community where locals can thrive.”
              </blockquote>
              <p className="mt-6 text-sm leading-7 text-slate-300">
                This campaign is rooted in community, not noise. It’s about thoughtful leadership, real listening, and making decisions that work for the people who live here year-round.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-20">
        <Card className="rounded-[2rem] border-0 bg-white shadow-xl shadow-slate-200/70">
          <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Get Involved</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Join the campaign</h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-700">
                Want to help spread the word, host a conversation, or stay updated? Reach out and be part of building a stronger future for Silverthorne.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-200">
              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p>chandler.morehardt@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Community</p>
                  <p>Silverthorne, Colorado</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Volunteer Opportunities</p>
                  <p>Neighborhood outreach, campaign events, digital support, and more.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl">Volunteer</Button>
                <Button variant="outline" className="rounded-2xl">Contact the Campaign</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
