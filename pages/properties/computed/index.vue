<template>
    <div>
        <h2> Shopping cart </h2>
        <p> Total Items: {{ totalItems }}</p>
        <p> Total Prices: {{ totalPrices }}</p>
        <p class="w-[1300px]">
            {{ cart }}
        </p>
        <button @click="addItem"> Add Item </button>
    </div>
</template>

<script setup lang="js">


const cart = ref([
    { name: 'Apple', price: 2.2, quantity: 2 },
    { name: 'Banana', price: 3.2, quantity: 2 },
    { name: 'Cherry', price: 10.5, quantity: 6 },
    { name: 'Kiwi', price: 3, quantity: 3 },
    { name: 'Mango', price: 6.8, quantity: 5 },
])

const totalItems = computed( () => {
    return cart.value.reduce((total, item) => total + item.quantity, 0);
})

const totalPrices = computed( () => {
    return cart.value.reduce((total, item) => total + item.price + item.quantity, 0).toFixed(2)
})

function addItem() {
  cart.value.push({ name: 'Orange', price: 1.2, quantity: 1 });
}
</script>