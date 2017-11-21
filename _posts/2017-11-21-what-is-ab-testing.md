---
layout: post
title:  "What is A/B testing?"
date:   2017-11-21
author: Aaron Groom
categories:
  - tutorials
  - A/B testing
---

An invaluable component in any website owner's quiver is the A/B test -- an experiment in which the current website is compared with an alternate in order to guage the effectiveness of the site with respect to experiment objectives.  This post will examine one common A/B testing pattern and its potential effectiveness for a side project owner's purposes.

![](https://i.imgur.com/LzrZiod.jpg)

A/B testing has existed in some form or another for a long time (in medicine, for example, as a [control/treatment group test](https://en.wikipedia.org/wiki/Clinical_control_group)), but has blossomed during the digital age due to the ease in segmenting web visitors and the ease of generating experiment data (the page content elements that are being tested, for example).  A simple test can be devised and deployed to subject groups in minutes, and results can be gathered in real time to determine whether the change was effective or not.

## Segmenting A and B groups

Segmenting A and B groups is as simple as querying the random number generator on your web server's operating system: if the value is less than 0.5, the visitor is served the current, control content and placed into group A, and if it is greated or equal to 0.5, the user is placed into group B and served the new content.  The choice of 50% as the experiment ratio is, of course, arbitrary, and could be any level desired based on the experiment's goals. As an example, a potentially controversial experiment might only be served to 5% of visitors to prevent the extent of potential damage!

Experiment groups can be identified by visitor characteristics, such as geography, browser or operating system type. A commonly performed test is one that includes a feature only available in recent browsers: the A/B groups are selected only from visitors using the latest versions of Chrome and Firefox, for example. If the feature is successful, the cost/benefit analysis of leaving behind users on older browsers can then be made with more rigor: the cost of leaving users behind is balanced with a better measure of users who appreciate the new feature.

## Measuring experiment effectiveness

The goal of the experiment is up to you!

Typically, experiments on landing pages and marketing pages measure clicks on the "call-to-action" signup button and eventual purchases.  However, more fine-grained experiments can be devised that examine how engaging a piece of content is (how long did the user spend reading the article?) or how easy to understand an onboarding form is (how many users got lost or gave up inserting information in the form?)

Some goals are easier quantifiable (number of signups), but others require a bit of interpretation.  With practice, experiments can be designed that are easy to measure and are appropriate for the content under question.

## Statistical significance

In testing our hypothesis, we need to make sure the results weren't due to random chance.  Imagine taking a quarter, flipping it five times in a row, and getting heads every time!  It's of course a possible outcome, but we'd probably say something like 'that's just random fluke!' if that happened.  So how can we quantify that in terms of actual visitor numbers?  If we run a test on 200,000 visitors, with 100,000 in each group, and experience a 2.03% conversion rate in the first group, and a 2.08% conversion rate in the experiment group, has the experiment succeeded?

Before we begin the test, we determine a *significance level*: the lower the significance level, the higher the barrier for accepting the results of the test.  In other words, if we set a low significance level of, say, 1% -- then we only accept the success of the test if the probability of those new signups happening randomly is less than 1%.  Had we chosen a %5 level, we would be able to accept the test if the chances of that happening randomly was less than %5, making us much more likely to accept the results of the experiment.

For a side project website owner with modest traffic, the challenge is picking a small enough significance level while still being able to acheive enough traffic to see if the test was successful.  One solution to this is to make the distribution of of the outcomes wider -- create a bolder experiment!

## Designing meaningful experiments -- be bold!

Changing the color or gradient of your call-to-action button might be a useful experiment if you have a lot of traffic, but what if you have more modest traffic?

One suggestion is to limit the number of distractions on the page, focusing the user on a single element, and choose a combination of text and design that's more likely to induce a reaction from a visitor. For example, if you're selling a computer security product and your existing content lists the technological features of your offering, try explaining your content in different terms (what happens if the user suffers a data breach, for example), and see how it performs.

The starker the differences in your tests, the quicker you'll be able to measure effectiveness, pick the winner, and then experiment again. Good luck!

#### About the Author

_Aaron Groom is the head of product at [Fujure](https://www.fujure.com/), a platform for designing and deploying A/B tests. If you'd like to submit your own guest blog post, feel free to send a pitch to [marketing@portablecto.com](mailto:marketing@portablecto.com)._
