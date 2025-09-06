import cards from "./cards.mjs";

function main() {
  // magic strings
  const all = "all";
  const back = "back";
  const front = "front";

  // dom elements
  const $card = document.getElementById("card");
  const $innerCard = document.getElementById("innerCard");
  const $correct = document.getElementById("correct");
  const $incorrect = document.getElementById("incorrect");
  const $reverse = document.getElementById("reverse");

  let currFront = front;
  let currLabel;
  let currCard;

  const { currStacks, incorrects, stacks, $select } = initStacks(cards);

  // set handlers
  $select.addEventListener("change", onChangeStack);
  $card.addEventListener("click", onFlipCard);
  $correct.addEventListener("click", onCorrect);
  $incorrect.addEventListener("click", onIncorrect);
  $reverse.addEventListener("change", onReverseChange);

  // start on 'all'

  $card.dataset.side = currFront;
  changeStack(all);

  function popCard() {
    if (currStacks[currLabel].length === 0) {
      if (incorrects[currLabel].length > 0) {
        shuffle(incorrects[currLabel]);
        currStacks[currLabel] = [...incorrects[currLabel]];
        shuffle(currStacks[currLabel]);
        incorrects[currLabel] = [];
      } else {
        alert(`You have finished chapter ${currLabel}`);
        const st = [...stacks[currLabel]];
        shuffle(st);
        currStacks[currLabel] = st;
      }
    }
    currCard = currStacks[currLabel].pop();
  }

  function onCorrect() {
    popCard();
    setFront();
    displayCard();
  }

  function onIncorrect() {
    incorrects[currLabel].push(currCard);
    popCard();
    setFront();
    displayCard();
  }

  function changeStack(label) {
    let cl = currLabel || all;
    if (currCard) {
      incorrects[cl].push(currCard);
    }
    currLabel = label;
    popCard();
    setFront();
    displayCard();
  }

  function onChangeStack(e) {
    changeStack(e.target.value);
  }

  function displayCard() {
    $innerCard.innerText = currCard[$card.dataset.side];
  }

  function setFront() {
    $card.dataset.side = currFront;
  }

  function flipCard() {
    if ($card.dataset.side === front) {
      $card.dataset.side = back;
    } else {
      $card.dataset.side = front;
    }
  }

  function onFlipCard() {
    flipCard();
    displayCard();
  }

  function onReverseChange(e) {
    if (e.target.checked) {
      $card.dataset.side = currFront = back;
    } else {
      $card.dataset.side = currFront = front;
    }
    setFront();
    displayCard();
  }

  function initStacks(cards) {
    const $select = document.getElementById("stackSelect");
    const stacks = {};
    const currStacks = {};
    const incorrects = { [all]: [] };
    const allCards = [];
    const $allOpt = mkSelect(all);
    $allOpt.selected = true;
    $select.append($allOpt);
    for (const [label, stack] of Object.entries(cards)) {
      incorrects[label] = [];
      const s = [...stack];
      allCards.push(...s);
      stacks[label] = [...s];
      shuffle(s);
      currStacks[label] = s;
      const $opt = mkSelect(label);
      $select.append($opt);
    }
    stacks[all] = [...allCards];
    shuffle(allCards);
    currStacks[all] = allCards;
    return { currStacks, incorrects, stacks, $select };
  }

  function mkSelect(label) {
    const $opt = document.createElement("option");
    $opt.value = label;
    $opt.text = label;
    return $opt;
  }

  // from https://stackoverflow.com/a/12646864
  function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
window.onload = main;
