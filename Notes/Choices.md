---
layout: doc
title: Choices
lang: en-US
---

# Choices

## Anatomy of the hypertext choice

::: tip Decision processes
This page focuses on hypertext choices, but a lot of the concepts explored here extend significantly to broader decision making.
:::

![choice anatomy](/en-choice-poetics-dark.png){.dark-only}
![choice anatomy](/en-choice-poetics-light.png){.light-only}

::: info Constitutive elements
1. **The FRAMING**: what comes before and helps understand its context and stakes.
2. **The TEXT** for each of the available options
3. **The OUTCOMES** of each of those options
:::

### Player motivations

- **DIEGETIC**: the character wants to achieve a goal
- **SEMI**-**DIEGETIC**: the player acts out of sympathy / empathy, they roleplay, they're pushing the game to a particular limit (minmaxing a specific attribute / alignment) while preserving a strong level of immersion.
- **EXTRA**-**DIEGETIC**: the player picks whacky choices, entertains an audience, explores new options for completionism purposes, etc.

Not knowing exactly how the player engages with a choice means the author needs to reflect the potential nail-biting nature of the decision. 

### Framing

#### Normal framing

- Context of application (timing) and everything preparing the appearance and the effect of the choice
- Perceived stakes -> see [Dunyazad](/Notes/Choices.md#dunyazads-procedural-generation) for how to
- Games with a time loop or a time mechanic (e.g. katana zero) -> framing of the choice changes everytime we update our knowledge about its possible consequences, either by playing it again or seeing in advance the consequences of an option

#### Framing effect as an inherent part of choices
By being proposed to the player, the act of choosing itself is legitimized. Cf Mass effect and the Krogan problem. Even letting the player distance itself from the course of action available takes a certain worldview for granted.

### Options

Good practice [according to Ryan Kaufman](https://pmjg.blogspot.com/2023/12/applying-and-improving-3-types-of.html): never ask players if they want to access side content, but provide reflective choices to justify getting away from it.

You want CONTRAST, either to have a healthy balance in dialogue options, or to go with a specific effect:
- add (LIE) after the second occurrence 
- Unchoice (see [below](/Notes/Choices.md#notable-choice-types))

For reflective choices, characterization or concrete consequences go a longer way than a candid "What do you think?".


### Certainty

Capacity of the player to anticipate the consequences of their actions. A defining factor of agency, but it can be manipulated in very different ways.
- <u>Fallen London</u>, CRPGs, etc: a straight-up chance of success expressed through a percentage or another mean of quantification. Detracts from immersion, suggests grinding stats, exploiting failsafe mechanics... OR if the game pushes against this idea, can enhance a sense of roleplay and a dedication to making high-stakes choices in appropriate strong narrative moments, and living with the consequence whatever they may be (hello Disco Elysium!).
- <u>Papers, Please</u>: in the short term, uncertainty doesn't come from our own actions but from the motivations of the people we face, which is how the game manufactures complicity (along with the important step of providing many possible justifications for our decisions).

Can be influenced by the format of the options: are we faced with a menu, dialogue options, or broader real-time open actions?

### Constraints

- Resources needed for options (materials or stats) that you can acquire in prevision or find yourself equipped with
- Mechanical ability in real-time gameplay games
- Limited time to choose

### Other characteristics

- Reversibility
- 

## Player experience

Many dimensions of a player's experience are affected by choices and their constitutive elements.
- Agency: ability to consciously move the story towards a direction or another
- Influence: see one's actions have consequences on the world and the story, even when those were not anticipated / premeditated
- Autonomy: ability to pursue one's own goals
- Identification: pay attention to the phrasing and the coherence of the character's viewpoint, emotions, mode of expression, etc.
- Transportation: choices can both express "what happens" in a playthrough as a linear story, or, more impactfully, the breadth of "what could happen" in the context of multiple playthroughs. Supposes outcomes that are congruent to their options and similar in terms of impact and weight. The **Time Cave** is the epitome of that principle.
- Absorption: detached from "immersion" and its sensory connotation, describes the player's state of focus, which serves their sense of flow. Choices can both demand focus and divert attention from the narrative.


The player's ***interpretation*** of the choice as a whole is influenced both by it's framing and format when presented, but also in a second time when seeing the outcomes of their choice.

## Notable choice types

- Blind choices with no framing (`go left` vs `go right`)
- False choice (suggestion of a non-existent embranchment)
- Dead-end option (one or more options bring you to a game over, frequent in gauntlet structures)
- Dilemmas (measurable and variables-backed consequences, as opposed to flavor choices)
- Unchoices where only one option is possible 
- Delayed consequences ([deemed deprecated by Peter Mawhorter](http://www.fdg2014.org/papers/fdg2014_paper_19.pdf) but [defended by Emily Short](https://emshort.blog/2019/04/09/choice-poetics-peter-mawhorter/) when backed with stats)
- Reflective choices that allow the player [to either express their values / opinions or to determine what kind of person their character is](https://catacalypto.wordpress.com/2018/06/19/successful-reflective-choices-in-interactive-narrative/). Phrasing then matters a lot, being succinct enhances absorption (see below) and is more visceral, giving flavor to the options can titillate the player's curiosity and put the emphasis on the character. When playing an already defined protagonist, playing with the conventions is very effective in highlighting their desires and limitations + always make room for characterization outside the scope of decisions (the player choses the action, the character their mode of expression). Reflective choices give insight into the character and / or give participation in their construction.
    - Subset of the reflective choice: proposing you the same dialogue option twice but the second time, it's a lie (used at least once in <u>Slay The Princess</u>).
- Story-defining choices where you complete the game's narration (in [Cactus Blue Motel](https://astriddalmady.com/cactusblue.html)'s opening, you finish the narrator's sentence describing who's driving the car)

## Dunyazad's procedural generation

[Peter Mawhorter's system](https://www.aaai.org/ocs/index.php/AIIDE/AIIDE15/paper/download/11550/11355) to generate choice clusters and text. Based on RPG-like skills that are openly called out in options. Certainty is maximized as much as possible.

- obvious choices: one option that achieves a goal and doesn’t fail any, all other options threaten a goal while achieving none
- relaxed choices: each option enables or achieve a goal, none threaten / fail any goal. Low stakes.
- dilemma choices: all options threaten a goal (their priority being equal), none achieve any goal, options that enable a goal need to fail a goal.

