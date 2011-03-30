---
layout: post
title: "Proof of Concept: ScoreSettler"
category: experiments
---
When I'm playing [Settlers of Catan][catan] with friends, it *always* seems like either 6 or 8 is really hot, and dominates the rolls. I realize that they're common rolls, and that 7 is theoretically the most common roll, but it never quite seems that way, that either 6 or 8 is dominant. It also seems like 5 or 9 is way more frequent than its statistical pairing, and I've wanted an easy way to track these stats in the past.

So, I thought, "Hey, I know how to code, it would be a simple UI in a browser, with minimal JS needs, just make it already." I got out my notebook and sketched out some ideas on UI... and then let it sit for quite awhile. I'm pretty sure it's been at least six months, if not more.

It's been kind of bothering me for awhile now, and even though we don't play Settlers as much these days ([Dominion][dom] is amazing), I've *still* wanted to build it. Tonight, finally, I just sat down for a couple of hours and poked it out of my head, and called it [ScoreSettler][ss].

You can now go [try it out][ss] or [clone/fork the source][sss] for yourself. It's all here on GitHub, right alongside this blog. I'd call it a proof of concept at this point, which means that if I never come back to it, I can still consider it complete, right?

I make no claims as to the quality of the code. It's fairly simple and requires a modern browser (which means no IE < 9), as I'm not using any JS libraries to do anything. It's just plain and simple JS, using event listeners. I'm sure it's not perfect, that there's spots to optimize, that it could use a better coat of paint, but hey, it works.

It even has a rolling simulator, which I was using for testing. It's kind of fun to just watch it roll away though.

Heck, it works on the iPad, meaning I could, in theory, use it right now -- and that's awesome.

So, yeah. Feel free to [go play][ss], or [fork it][sss] and make it pretty or something. It's nothing that huge or exciting, but I'm glad to have it out of my head now, and I look forward to tracking my next game of [Settlers][catan] to see how the dice are screwing me. :)

[catan]: http://www.catan.com/catan-games/boardgame.html
[dom]: http://www.riograndegames.com/games.html?id=278
[ss]: {{ site.url }}/ScoreSettler
[sss]: http://github.com/brianarn/ScoreSettler
