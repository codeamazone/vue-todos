<template>
    <div>
        <ul v-if="todos && todos.length > 0">
            <li v-for="item in todos" :key="item.id">
                <input @change="handleUpdate(item)" type="checkbox" v-model="item.done"/>
                <input @change="handleUpdate(item)" name="todo" :class="{'done': item.done}" v-model="item.text"/>
                <b-button @click="handleRemove(item)" class="btn-sm btn-danger float-right m-0 py-0 px-1">
                    <font-awesome-icon icon="trash-alt"/>
                </b-button>
            </li>
        </ul>
        <h5 v-else>Keine Todos vorhanden</h5>
    </div>
</template>

<script>
export default {
    name: "Todo",
    props: ['todos','handleRemove','handleUpdate'],
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
input[name="todo"] {
    border: none;
    width: 80%;
}
input[type="checkbox"] {
    margin-right: 5px;
}
ul {
    width: 80%;
    margin: auto;
}
li {
    list-style: none;
    text-align: left;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 3px;
    padding: 3px;
}
</style>
