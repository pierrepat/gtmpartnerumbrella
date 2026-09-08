# Context: My Situation

I run an MVA (motor vehicle accident) lead generation business. I'm running Facebook instant form ads for a law firm client (DK Law) in California. I'm spending $100/day on Meta.

My problem: I'm getting junk leads. Out of ~170 leads delivered, only 5 signed retainers (~3% conversion). My internal leads (Source 3) had 0 conversions out of 20 leads with 45% bad data (disconnected numbers, fake info).

I have:
- GoHighLevel (GHL) account
- Meta pixel called "MVA - USA" (ID: 1645860716564409) with 2.3K events
- Facebook instant forms running lead gen campaigns
- A shared Google Sheet where my client (DK Law) updates lead dispositions daily
- n8n for automation
- OTP verification on my forms (just added)

I want to set up CAPI (Conversion API) so Meta stops optimizing for junk form submissions and starts optimizing for leads that actually qualify and sign retainers.

My GHL pipeline stages should be:
1. New Lead - form submitted
2. Valid Lead (MQL) - OTP passed, real phone, real answers
3. Sent to Client - delivered to DK Law
4. Qualified (SQL) - DK Law says viable case
5. Signed - DK Law signs retainer
6. Rejected - any rejection reason

You have access to my Meta Ads account via MCP. Please walk me through setting up CAPI step by step using my actual account data. Start with read-only operations to see what I have, then guide me through the setup.

Below are two video transcripts explaining exactly how to do this. Use these as the technical guide:

---

# VIDEO 1: Sending the Right Facebook CAPI Events to Get Fewer Junk Leads

Have you ever ran Facebook ads, specifically lead form ads on Facebook, and you get a ton of leads, but all of them are bad leads or they don't even book a call? Or worse, none of them either book a call or actually show up to the call. I've seen it time and time and again. And no, your ad isn't the only issue. It's actually what you're telling Meta to optimize for. I'm going to show you how to send the right Facebook copy events back to Meta so that you send the right signals to get fewer junk leads and then that way you get more buyers who actually show up and close.

So here's the first truth. Facebook doesn't know what a good lead looks like unless you send the right signals and show it what a good lead is. The issue is that lead forms are low friction. You see an ad, it's a form native on Facebook. You just quickly fill out your information. Sometimes people have the autofill. So it literally click a button, it has all your information. You just have to click another button, you submit. Very low friction.

High friction would be maybe it's a VSSL optin landing page, a quiz funnel, whatever - you're taking them off platform. But lead forms are lower friction. So you're going to get higher volume of leads, but sometimes you're going to get bad leads.

Here's what's happening. You have an ad, send it to a lead form. On the back end, you have a metapixel tracking all of your events. Whenever someone fills out this lead form, Facebook sends an event back to your pixel and categorizes this as a lead. The issue is: let's say 5 leads come in. Only 1 is quality. The other 4 are junk (invalid phones, emails, etc). Meta got these 5 leads and thinks they're ALL good. So it goes to find more leads like those - including the junk ones. That's the problem.

How to fix this:

1. Add qualifying questions to your lead form - adds friction
2. Add conditional logic - e.g. if monthly budget under 10K, disqualify automatically
3. Don't auto-populate contact information (email, phone, name) - make them type it manually
4. Switch to "higher intent" optimization on your lead forms

But the real fix: Facebook has "optimize for conversion events." You want to optimize for CONVERSION LEADS, not just LEADS.

From Facebook: "If you want to use instant forms and improve lead quality, you can use the performance goal: Maximize number of conversion leads." This works best with CAPI for CRM integration.

Stats: Lead ads using CAPI + "maximize conversion leads" saw 19.2% lower cost per QUALITY lead. Without CAPI, still saw 11% reduction.

How to set up your pipeline in GoHighLevel:
- New Lead stage
- Valid Lead (MQL) - BDR checks if phone is valid, email legit, answers make sense. If yes, move to this stage. Send this event back to Meta.
- Appointment Booked
- Appointment Showed
- Quality Appointment Showed (SQL)
- Closed Won

Then in Events Manager, you set up your sales funnel stages: tell Meta which stages are positive (MQL, SQL, Won). When you optimize for conversion leads, Meta uses this data to find leads that actually move down the pipeline.

CAPI sends server-side events - more accurate, not blocked by cookies, not dependent on browser. Stronger signals = better targeting.

Think of it like training a dog. If you reward it for peeing on the carpet, it keeps doing it. Same with Meta - if you reward junk leads, you get more junk leads.

Recap:
- Don't just fire lead events when form is submitted
- Only fire after validation
- Track booked appointments as scheduled event
- Track showups with custom event
- Mark qualified showed as SQL

---

# VIDEO 2: Setting Up Facebook CAPI with GoHighLevel (Step by Step)

Most people get this wrong. Here's exactly how to set up Facebook CAPI inside GoHighLevel step by step.

What to expect when you switch to CAPI: higher lead quality, cost per lead might increase, but cost per QUALIFIED lead decreases. Conversion rate from lead to sell increases.

STEP 1: Get your pixel ID. Go to Facebook Events Manager, find your pixel, save the pixel ID (data set ID).

STEP 2: Go to settings on that pixel, scroll down to Conversion API section, find "generate your access token", generate and copy it. You need: pixel ID + access token.

STEP 3: Go to GoHighLevel > Settings > Custom Values. Create:
- Facebook Access Token custom value
- Facebook Pixel ID custom value
Paste your values there. Makes them reusable throughout GHL.

HOW TO CHECK IF CAPI IS WORKING: In your pixel, go to Overview > Integration tab. If it only says "Meta Pixel" - you DON'T have server-side tracking. What you SHOULD see: "Multiple" integrations showing "sent via Conversion API and Meta Pixel" with event match quality scores.

UTM PARAMETERS: On your lead form, click Settings > Tracking Parameters. Add:
- utm_source = facebook
- utm_campaign = {{campaign.name}}
- utm_medium = {{adset.name}}
Also add to any funnel/landing page URL parameters.

INTEGRATE AD ACCOUNT: Go to GHL Settings > Integrations > integrate your Facebook ad account.

THE CAPI WORKFLOW: This is important - there are FUNNEL EVENTS and LEAD EVENTS.
- Funnel events = for landing pages, surveys, booking calendars, funnels, forms
- Lead events = for INSTANT FORMS (this is what you want)

In your GHL workflow:
1. Add "Meta Conversion API" action
2. Connection type/event type: select LEAD EVENT
3. Paste your access token
4. Paste your pixel ID (labeled "data set ID")
5. Stage name: use the variable {{opportunity.stage_name}} so it automatically uses whatever pipeline stage the lead moved to
6. Or manually add stage names with IF statements for each stage

For "sold/won" stage, you can add a VALUE field - the opportunity value gets sent to Meta so you can track actual ROAS.

FULL WORKFLOW EXAMPLE: Pipeline stages with CAPI events:
- New Lead → Valid Lead → Appointment Booked → Appointment Showed → Quality Appointment Showed → Won
Each stage change fires a CAPI event back to pixel.

CONVERSION LEADS SETUP:
- In your ads, Performance Goal: select "Maximize number of conversion leads" (not just "Maximize leads")
- In your pixel, there's a CRM section (appears after events start flowing)
- Click Modify > add positive funnel stages in ORDER: Lead → Schedule → Purchase
- These tell Meta which stages are positive signals

IMPORTANT TIPS:
- Don't switch cold turkey. Keep your "maximize leads" campaigns running
- Create a SEPARATE campaign for "maximize conversion leads"
- Don't combine both goals in the same campaign (messes up reporting)
- Only start "conversion leads" campaign once pixel has enough data/events
- Don't panic if CPL increases - cost per QUALITY lead will decrease

LAST STEP: Enable automatic advanced matching. Go to pixel > Settings > scroll to "Automatic Website Matching" > turn it ON. Easy win for matching.

RECAP:
1. Get pixel ID + access token
2. Save as custom values in GHL
3. Add UTM parameters to ads
4. Integrate ad account in GHL
5. Understand funnel events vs lead events (use LEAD EVENTS for instant forms)
6. Set up CAPI workflow: lead event, access token, pixel ID, stage name variable
7. Create separate campaign with "maximize conversion leads"
8. Configure sales funnel in Events Manager (add positive stages)
9. Enable automatic advanced matching
