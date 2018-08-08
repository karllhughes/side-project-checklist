---
layout: post
title:  My Social Media & Email Marketing Automation Strategy
date:   2018-08-08
author: Karl Hughes
categories:
  - guides
  - social media
  - automation
---

A couple days ago, I Tweeted a diagram of my social media and email automation strategy for [Portable CTO/Side Project Checklist](https://twitter.com/portablecto) asking if anyone would like a writeup about how I do it. After a couple years playing around with different [social media automation tools](/2017/social-media-tools/) and about a year of running a [pretty successful email list](https://sideprojectchecklist.us15.list-manage.com/subscribe?u=4eba8b205fc13380cd3e6f3fc&id=cc13b917ec), I've come up with a workflow that works for me and I think is worth sharing. While the comprehensive diagram may look intimidating, don't worry; I'll walk you through each piece as well as the reasons I chose the tools I did, and some of the goals of my setup. Let's get to it!

![](https://i.imgur.com/YIOHYYE.jpg)

## The Requirements

First, it's important that you understand my social media and email marketing goals. [Portable CTO](https://www.portablecto.com/) and [Side Project Checklist](https://www.sideprojectchecklist.com/) are two sites I run that help startup and side project founders find tools and advice. They share a Twitter account and email list (for now at least) as their audiences have enough overlap, and my time is pretty limited.

Both websites make money through affiliate links on each site, in the weekly email I send, and on social media. The content creation and distribution strategy is focused on bringing in traffic and gaining subscribers, so with that in mind, here's what I considered when automating my social media and email marketing:

### It must be hands-off

Being a software engineer, I've always been drawn to automating things, and having a short attention span, I know that when a job becomes repetitive, I'm not going to do. Any social media and email marketing solution I use must be mostly hands-off.

### It must be able to treat different kinds of content appropriately

I want the [Portable CTO Twitter feed](https://twitter.com/portablecto) and [email list](https://sideprojectchecklist.us15.list-manage.com/subscribe?u=4eba8b205fc13380cd3e6f3fc&id=cc13b917ec) to be about 75% fresh, interesting content created by other people across the internet and 25% my own personal evergreen content and sponsored links. The problem I had with most scheduling tools is that they don't allow you to "weight" content differently, so if I queued up hundreds of posts in Buffer, I'd have to keep adjusting the frequency of new to old or sponsored content.

### It should share in a way that is appropriate for each channel

On Twitter, you typically want to be brief, include hashtags, and mention people. On Linkedin, you can be a little longer, and in my weekly email, I want to include a little personal touch to each link I share. That said, I don't want to have to copy/paste the same content into three different places, so the system I set up must take this into account.

With these requirements in mind, I realized that I could break this process up into two parts: Content Curation and Content Promotion.

## Content Curation

![](https://i.imgur.com/fTFJkhv.jpg)

As a programmer, I often think of things in terms of input and output. On the input side of things, content curation requires three things:

- A steady stream of new, interesting content
- A list of evergreen posts that can be shared regularly
- A list of sponsored links and text

Given those inputs, I wanted to output three [RSS feeds](https://en.wikipedia.org/wiki/RSS) that I could then hook into my Content Promotion machine to automate sharing this content.

### Discovering Fresh Content

The best way to find high quality content on the internet right now is to listen to the people who curate it. I know there are a lot of efforts to automate this content discovery and curation process, but so far, I've found nothing better than subscribing to great blogs and email lists. I use [Feedbin](https://feedbin.com/) and [Kill The Newsletter](https://www.kill-the-newsletter.com/) for this.

I've gathered a list of a few dozen great blogs and newsletters that share high quality content, and then every week, I manually go through the articles and save the best for my audience with a tool called [Diigo](https://www.diigo.com/).

![](https://i.imgur.com/GjUpQol.gif)

When I tag content on Diigo, it gets added to an RSS feed, but unfortunately, Diigo adds some extra text that I don't really want. So, I use Zapier to read the RSS feed for new items, clean them up with a filter, and then add them to a new RSS feed managed by Zapier. This feed has all the new content I want to share in my next email newsletter and on Portable CTO's Twitter account.

### Re-Sharing Evergreen Content

Most of the blog posts I write for Portable CTO, Side Project Checklist, and my personal blog are "evergreen", meaning that they're as relevant now as they will be in two years or more. This kind of content is great for sharing on social media because you can repackage it every so often and re-share it every 3-6 months if you want.

I used to use a tool called [Recurpost](https://recurpost.com/), which I still like, but I ran into some limits with using posts it shared in my email newsletter. So, I built my own library of evergreen content in [Airtable](https://airtable.com/invite/r/4EaSmQNr). 

![](https://i.imgur.com/a3FnKs6.gif)

Then set up a Zap to automatically get the article least recently shared and add it to another RSS feed for evergreen content. I had to do some manual work the first time I set this up, but now there's another Zap that adds new posts from my sites' RSS feeds to the Airtable automatically, making this whole part of the process hands-free. The only thing I may need to do is manually refresh the descriptions and change any links that break over time. 

### Injecting Sponsored Content

Finally, I want to be able to publish 1-2 sponsored links per week in my Twitter feed and 2 in each weekly email. I'm especially interested in tracking these sponsored links as they directly impact revenue, so I create a link on [Rebrandly](https://www.rebrandly.com/) for each sponsored link. Then, I set up a Zap to automatically go to Rebrandly, get a random sponsored link, and add it to an RSS feed every few days. This isn't a perfect solution as sometimes the same Rebrandly link gets shared two times in a row, but it's spread out by a couple days, so it's good enough for now. 

## Content Promotion

At this point, each type of content I want to share has been added to an RSS feed, so now the challenge is to aggregate these feeds and inject the content into Twitter, Linkedin, and my Weekly Email.

![](https://i.imgur.com/LXBhT0W.jpg)

### Twitter

Getting content to Twitter isn't a direct path because Twitter is a bit different from the other two platforms. I use [Ritekit](https://ritekit.com/) to schedule fresh content and evergreen posts by adding them to a queue. Ritekit will also automatically add hashtags, mentions, and emojis to the tweets, which make them much more interesting and fun.

### Weekly Email

I built a tool called [RSS-To-Email](https://email.pcto.co/) that will take one or more RSS feeds and turn them into an HTML or [MJML](https://mjml.io/) formatted email. I've created a custom MJML template for the newsletter and I split my content into two main feeds: Tools and Articles so that they can be put into different sections of the email.

For a while, I was manually triggering the email creation by calling a Webtask that hosted a version of RSS-To-Email, but I am now automating this part of the process by using Zapier to generate an email and save it as a new Mailchimp campaign each week. Now each week the only manual work I have to do is go in and write a subject line and introduction for my email. It takes about 15 minutes.

### Linkedin

Finally, I share evergreen posts to my personal Linkedin. I've found the audience there to be receptive to these kinds of posts, and may start putting them on Facebook too. The reason I don't use Ritekit for this is that I don't actually want hashtags and mentions on Linkedin as they aren't quite as welcome there.

## Future Improvements

![](https://i.imgur.com/YIOHYYE.jpg)

So that's it. While I've gotten the process down to less than 1 hour of work per week, it's not perfect. Just a few of my next steps for improving this workflow are:

- **Automate the curation/discovery process** - Right now I spend the bulk of that hour sifting through content and reading posts that I might want to share. While I might spend this time reading or learning anyway, I am looking into tools that do some automated curation as well. 
- **Using Mailjet to simplify email editing** - My current email provider (Mailchimp) is great for editing template-based emails, but it sucks for editing HTML emails. Mailjet allows for MJML editing, which is much easier, so I may migrate to that. The big cost here would be moving all my signup forms and automated campaigns.
- **Better tracking on all links** - I don't know how well each link performs on a per-platform basis, but it would certainly be possible to figure it out. What I'd like to have is the number of clicks on Twitter vs. Email vs. Linkedin for each link and each time I share a link (if it happens multiple times).
- **Auto-following and unfollowing** - I know Twitter has made this harder in the past year, but it's still possible using some in-browser solutions. I've found it to be great for building followers, especially if I auto-follow authors whose content I share. 
- **Build the whole thing into a comprehensive product** - This is a long way off, but my project, [RSS-To-Email](https://email.pcto.co/), might be my starting point. Once I prove the efficacy of this process, I'd like to build a social media automation tool that hooks up all the pieces and makes it easy for other creators to set up similar systems. My plan is to use it myself for a couple projects, then see if it's worth building a real product.

That's it for now, but I'll try to update this post as my process changes, and I'm happy to answer specific questions on [my personal Twitter](https://twitter.com/karllhughes) or via [email](mailto:karl@portablecto.com).
