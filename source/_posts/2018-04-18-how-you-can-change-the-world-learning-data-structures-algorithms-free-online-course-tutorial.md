---
layout: post
title: >-
  How you can change the world by learning Data Structures and Algorithms
comments: true
toc: true
pageviews__total: 0
pageviews__recent: 0
pageviews__avg_time: 0
tutorial__order: 1
photos:
- /images/data-structures-algorithms-time-complexity-big-o-notation-small.jpg
- /images/data-structures-algorithms-time-complexity-big-o-notation-large.jpg
photos__background_color: '#F4F0EF'
tags:
  - big-o notation
  - algorithms
  - tutorial_algorithms
categories:
  - Programming
  - Data Structures and Algorithms (DSA)
date: 2018-04-04 16:16:07
---

As a developer, you have the power to change the world! You can write programs that enable new technologies. You might work in software to find an earlier diagnosis of diseases. Also, you can write programs to make people save them time to do other amazing things. Whatever you do it has the potential to impact people around you.

However, these accomplishments are only possible if we write software that is fast and can scale. Learn how to measure your code is the goal of this online course.

<!-- more -->

This post is the first of series of tutorial about Data Structures and Algorithms (DSA):

- Algorithms time complexity and Growth rate of functions.
- 7 most popular running times of algorithms with examples.

First, let’s see one real story to drive this point home.

# An algorithm that saved millions of lives

During War World II the Germans used AM signals to communicate with troops around Europe. Anybody with an AM radio and some knowledge of Morse code could intercept the message. However, the information was encoded! All attacked countries tried to decoded by hand. Sometimes they got lucky and were able to make sense of a couple of messages at the end of the day. Unfortunately, The Nazis changed the encoding every single day!

A math genius called Alan Turing joined the British military to crack the German "Enigma" code. He knew they would never get ahead if they keep doing the calculations by pen and paper. So after many months of hard work, they built a machine. It took more than a day to decode a message! So, it was useless.

Alan's team found out that every encrypted message ended with the same string: “Hail Hitler” Aha!! After changing the algorithm, the machine was used to save millions of lives!

> The same machine that was going to get shut down as a failure became a live saver. Likewise, you can do way more with your computing resources when you write efficient code. That is what we are going to learn in this course!

# So, why should you learn to write efficient algorithms?

There are many advantages; these are just some of them:

* Crush job interviews and land the tech job of your dreams.
* You would become a much better developer.
* Spend less time debugging, optimizing and re-writing code.
* Your software will run faster with the same hardware.
* Your programs might be used to aid discoveries that save millions of lives.

Without further ado, Let’s save the world!

# What are algorithms?

Algorithms are steps of how to do some task. When you cook, you follow a recipe (or algorithms) to prepare a dish. If you play a game, you are devising strategies (or algorithms) to help you win. Likewise, algorithms in computers are a set of instructions used to solve a problem. There are "good" algorithms and "bad" algorithms. The good ones are fast; the bad ones are slow. Slow algorithms cost more money and make some calculations impossible in our lifespan!

We are going to explore the basic concepts of algorithms. Also, we are going learn how to distinguish “fast” algorithms from “slow” ones. Even better, you will be able to “measure” the performance of your algorithms and improve them!

# How to improve your coding skills?

The first step to improving something is to measure it.

{% blockquote H. J. Harrington %}
Measurement is the first step that leads to control and eventually to improvement. If you can’t measure something, you can’t understand it. If you can’t understand it, you can’t control it. If you can’t control it, you can’t improve it.
{% endblockquote %}

How do you do "measure" your code? Would you clock "how long" it takes to run? What if you are running the same program on a mobile device or a quantum computer? The same code will give you different results, right?

To answer these questions, we need to nail some concepts first, like time complexity!

## Time complexity

Time complexity (or **running time**) is the estimated time taken by running algorithms. However, you do not measure it in seconds. It is a count of elementary operations performed by a program.

> The **time complexity** is not about timing how long the algorithm takes. Instead, how many operations are executed. The number of instructions executed by a program is affected by the size of the input and how their elements are arranged.

For instance, you want to sort an array of numbers. If the elements are already the program will perform fewer operations. On the contrary, if the items are in reverse order, it will require more swap operations to get it sorted.

We can say for each algorithm we can have the following running times:

* Worst-case time complexity
* Best-case time complexity
* Average-case time complexity

We usually care more about the **worst-case time complexity**. We are hoping for the best but preparing for the **worst**.

Here's a code example of how you can calculate the time complexity: *Find the smallest number in an array*.

{% codeblock lang:js mark:6-7,10-11,15 %}
/**
 * Get the smallest number on an array of numbers
 * @param {Array} n array of numbers
 */
function getMin(n) {
  const array = Array.from(n);
  let min;

  array.forEach(element => {
    if(!min || element < min) {
      min = element;
    }
  });

  return min;
}

// average case: random order
console.log(getMin([9,20,4,21,49,39]));
// => 4

// best case: sorted array
console.log(getMin([4, 9, 20, 21, 39, 49]));
// => 4

// worst case: reversed sorted array
console.log(getMin([49, 39, 21, 20, 9, 4]));
// => 4
{% endcodeblock %}

We can represent `getMin` as a function of the size of the input `n` based on the number of operations it has to perform. For simplicity, let's assume that each line of code takes the same amount of time in the CPU. Let's make the sum:

* Line 6: 1 operation
* Line 7: 1 operation
* Line 9-13: it is a loop that executes size of `n` times
* Line 10: 1 operation
* Line 11: this one it is tricky. It is inside a conditional. We will assume the worst case where the array is sorted in ascending order. The condition (`if` block) will be executed each time. Thus, 1 operation
* Line 15: 1 operation

All in all, we have `3` operations outside the loop and `2` inside the `forEach` block. Since the loop goes for the size of `n`, this leaves us with `2(n) + 3`.

However, this expression is somewhat too specific and hard to compare algorithms with it. We are going to apply the **asymptotic analysis** to simplify this expression further.

## Asymptotic analysis

Asymptotic analysis is just evaluating functions as their value approximate to the infinite. In our previous example `2(n) + 3`, we can generalize it as `k(n) + c`. As the value of `n` grows, the value `c` is less and less significant, as you can see in the following table:

| n (size) | operations | result |
| - | - | - |
| 1 | 2(1) + 3 | 5 |
| 10 | 2(10) + 3 | 23 |
| 100 | 2(100) + 3 | 203 |
| 1,000 | 2(1,000) + 3 | 2,003 |
| 10,000 | 2(10,000) + 3 | 20,003 |

Believe it or not also `k` wouldn't make too much of a difference. Using this kind of asymptotic analysis we take the higher order element, in this case: `n`.

Let's do another example so that we can make this concept clearer. Let's say we have the following function: `3 n^2 + 2n + 20`. What would be the result using the asymptotic analysis?

> `3 n^2 + 2n + 20` as n grows bigger and bigger; the expression will become more like `n^2`.

Going back to our example, `getMin`, We can say that function has a time complexity of `n`. As you can see, we could approximate it as `2(n)` and drop the `+3` since it does not add too much value as n keep getting bigger.

We are interested in the big picture here, and we are going to use the asymptotic analysis to help us with that. With this framework, comparing algorithms, it is much easier. We can compare running times by their most significant term: `n^2` or `n` or `2^n`.

## Big-O notation and Growth rate of Functions

The Big O notation combines what we learned in the previous sections about **worst-case time complexity** and **asymptotic analysis**.

> The letter `O` refers to the **order** of a function.

The Big O notation is used to classify algorithms by their worst running time or also referred as the upper bound of the growth rate of a function.

In our previous example with `getMin` function, we can say it has a running time of `O(n)`. There are many different running times. Let's see the most common running times that we are going to cover in the next post and their relationship with time:

Growth rates vs. `n` size:

<div style="overflow-x:auto;">

<table>
<thead>
<tr>
<th>n</th>
<th>O(1)</th>
<th>O(log n)</th>
<th>O(n)</th>
<th>O(n log n)</th>
<th>O(n^2)</th>
<th>O(2^n)</th>
<th>O(n!)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
</tr>
<tr>
<td>10</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="orange">4 sec</td>
</tr>
<tr>
<td>100</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="red">40170 trillion years</td>
<td class="red">&gt; vigintillion years</td>
</tr>
<tr>
<td>1,000</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="red">&gt; vigintillion years</td>
<td class="red">&gt; centillion years</td>
</tr>
<tr>
<td>10,000</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="orange">2 min</td>
<td class="red">&gt; centillion years</td>
<td class="red">&gt; centillion years</td>
</tr>
<tr>
<td>100,000</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="orange">1 sec</td>
<td class="orange">3 hours</td>
<td class="red">&gt; centillion years</td>
<td class="red">&gt; centillion years</td>
</tr>
<tr>
<td>1,000,000</td>
<td class="green">&lt; 1 sec</td>
<td class="green">&lt; 1 sec</td>
<td class="orange">1 sec</td>
<td class="orange">20 sec</td>
<td class="orange">12 days</td>
<td class="red">&gt; centillion years</td>
<td class="red">&gt; centillion years</td>
</tr>
</tbody>
</table>

</div>

<small>Assuming: 1 GHz CPU and that it can execute on average one instruction in 1 nanosecond (usually takes more time). Also, bear in mind that each line might be translated into dozens of CPU instructions depending on the programming language</small>

As you can see, some algorithms are very time-consuming. An input size as little as 100, it is impossible to compute even if we had a 1 PHz (1 million GHz) CPU!! Hardware does not scale as well as software.

In the next post, we are going to explore all of these time complexities with a code example or two!
Are you ready to become a super programmer and scale your code?! <img src="/images/superman_shield.svg" width="25" height="25" alt="superman shield" style="display:inline-block;">