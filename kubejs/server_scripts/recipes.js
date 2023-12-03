ServerEvents.recipes(event => {
  let exchange = (Rate, CraftingInput, CraftingOutput) => {
    event.shapeless(Rate[0] + 'x ' + CraftingInput, [Rate[1] + 'x ' + CraftingOutput]),
    event.shapeless(Rate[1] + 'x ' + CraftingOutput, [Rate[0] + 'x ' + CraftingInput]);
  }

  let coins = ['copper', 'silver', 'gold', 'platinum', 'netherite'];
  for (let i = 0; i < coins.length; i++){
    exchange([8, 1], 'kubejs:coin_' + coins[i], 'kubejs:coin_' + coins[i] + '_stack')
    if (i != coins.length-1) {
    exchange([8, 1], 'kubejs:coin_' + coins[i] + '_stack', 'kubejs:coin_' + coins[i+1])
    }
  }

  console.log('Recipes (re)loaded!')
  }
)
