# 👖 Step 2 - Interact with the Products

> How to interact data with JavaScript, HTML and CSS in the browser

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [🎯 Objective](#-objective)
- [🏗 Prerequisites](#%F0%9F%8F%97-prerequisites)
- [📱 Features](#-features)
  - [Feature 0 - Show more](#feature-0---show-more)
  - [Feature 1 - Browse pages](#feature-1---browse-pages)
  - [Feature 2 - Filter by brands](#feature-2---filter-by-brands)
  - [Feature 3 - Filter by recent products](#feature-3---filter-by-recent-products)
  - [Feature 4 - Filter by reasonable price](#feature-4---filter-by-reasonable-price)
  - [Feature 5 - Sort by price](#feature-5---sort-by-price)
  - [Feature 6 - Sort by date](#feature-6---sort-by-date)
  - [Feature 8 - Number of products indicator](#feature-8---number-of-products-indicator)
  - [Feature 9 - Number of recent products indicator](#feature-9---number-of-recent-products-indicator)
  - [Feature 10 - p50, p90 and p95 price value indicator](#feature-10---p50-p90-and-p95-price-value-indicator)
  - [Feature 11 - Last released date indicator](#feature-11---last-released-date-indicator)
  - [Feature 12 - Open product link](#feature-12---open-product-link)
  - [Feature 12 - Save as favorite](#feature-12---save-as-favorite)
  - [Feature 4 - Filter by favorite](#feature-4---filter-by-favorite)
  - [Feature 12 - Usable and pleasant UX](#feature-12---usable-and-pleasant-ux)
- [👩‍💻 Just tell me what to do](#%E2%80%8D-just-tell-me-what-to-do)
  - [Don't forget. 4 Focus.](#dont-forget-4-focus)
- [🛣️ Related Theme and courses](#-related-theme-and-courses)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## 🎯 Objective

**Build a Usable and pleasant web page that interacts with arrays, objects, functions etc... with JavaScript, HTML and CSS.**

## 🏗 Prerequisites

1. Be sure **to have a clean working copy**.

This means that you should not have any uncommitted local changes.

```sh
❯ cd /path/to/workspace/clear-fashion
❯ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

2. **Pull** the `master` branch to update your local with the new remote changes

```sh
❯ git fetch origin
❯ git pull origin master
```

4. **Open the entry point [../client/index.html](../client/index.html)** in your browser (that loads the [../client/portfolio.js](../client/portfolio.js) file)

```sh
# macos cli
❯ open client/index.html
# linux cli
❯ xdg-open client/index.html

# or by double-clicking in your browser files
```

5. **Check the rendering of your browser webpage**

<img src="./img/2-browser.png" width="75%"/>

## 📱 Features

I will describe each feature with the [Agile User Story template](https://www.agilealliance.org/glossary/user-story-template/).

A [User Story](https://www.atlassian.com/agile/project-management/user-stories) is an informal, general explanation of a software feature written from the perspective of the end user or customer.

A user story should typically have a summary structured this way:

1. **As a** [user concerned by the story]
1. **I want** [goal of the story]
1. **so that** [reason for the story]

### Feature 0 - Show more

As a user<br>
I want to show more products<br>
So that I can display 12, 24 or 48 products on the same page

### Feature 1 - Browse pages

As a user<br>
I want to browse available pages<br>
So that I can load more products

### Feature 2 - Filter by brands

As a user<br>
I want to filter by brands name<br>
So that I can browse product for a specific brand

### Feature 3 - Filter by recent products

As a user<br>
I want to filter by by recent products<br>
So that I can browse the new released products (less than 2 weeks)

### Feature 4 - Filter by reasonable price

As a user<br>
I want to filter by reasonable price<br>
So that I can buy affordable product i.e less than 50€

### Feature 5 - Sort by price

As a user<br>
I want to sort by price<br>
So that I can easily identify cheapest and expensive products

### Feature 6 - Sort by date

As a user<br>
I want to sort by price<br>
So that I can easily identify recent and old products

### Feature 8 - Number of products indicator

As a user<br>
I want to indicate the number of displayed products<br>
So that I can understand how many products is available


### Feature 9 - Number of recent products indicator

As a user<br>
I want to indicate the number of displayed products<br>
So that I can understand how many new products is available

### Feature 10 - p50, p90 and p95 price value indicator

As a user<br>
I want to indicate the p50, p90 and p95 price value<br>
So that I can understand the price values of the products

### Feature 11 - Last released date indicator

As a user<br>
I want to indicate the last released date<br>
So that I can understand if we

### Feature 12 - Open product link

As a user<br>
I want to open product link in a new page<br>
So that I can buy the product easily

### Feature 12 - Save as favorite

As a user<br>
I want to save a product as favorite<br>
So that I can retreive this product later

### Feature 4 - Filter by favorite

As a user<br>
I want to filter by favorite products<br>
So that I can load only my favorite products

### Feature 12 - Usable and pleasant UX

As a user<br>
I want to parse a usable and pleasant web page<br>
So that I can find valuable and useful content


## 👩‍💻 Just tell me what to do

1. **Solve each `User Stories`** inside [../client/portfolio.js](../client/portfolio.js) file with JavaScript

<img src="./img/2-portfolio.png" width="75%"/>


2. Once an User Story is solved, **commit your modification**:

```sh
❯ cd /path/to/workspace/clear-fashion
❯ git add -A && git commit -m "feat(display): show 12, 24 or 48 products"
```

([why following a commit message convention?](https://dev.to/chrissiemhrk/git-commit-message-5e21)

3. **Commit early, commit often**
4. Don't forget **to push before the end of the workshop**

```sh
❯ git push origin master
```

**Note**: if you catch an error about authentication, [add your ssh to your github profile](https://help.github.com/articles/connecting-to-github-with-ssh/).

10. Check that your codebase works by checking the console output
11. If you need some helps on git commands, read [git - the simple guide](http://rogerdudler.github.io/git-guide/)

### Don't forget. 4 Focus.

* DOT - Do One Thing
* LIM - Less Is More
* If you change the [../client/index.html](../client/index.html) selectors, you should probably update [../client/portfolio.js](../client/portfolio.js) file
* English only: codebase, variables, comments...

**Focus on coding and web design**


## 🛣️ Related Theme and courses

* 🏁 [Theme 1 - About Javascript](https://github.com/92bondstreet/javascript-empire/blob/master/themes/1.md#about-javascript)
* 🏁 [Theme 1 - About HTML/CSS](https://github.com/92bondstreet/javascript-empire/blob/master/themes/1.md#about-htmlcss)
