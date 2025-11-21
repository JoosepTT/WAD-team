<template>
    <div id="footer">
        <ul>
            <li><a class="text-link-first" href="https://ois2.ut.ee/" target="_blank">OIS</a></li>
            <li><a class="text-link-second" href="https://courses.cs.ut.ee/" target="_blank">Courses</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5em;
    align-content: center;
    background-color: #9d9b7e;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
}

#footer ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 2em;
}

#footer ul a {
    font-size: 1.5em;
    transition: all 0.3s ease;
    transform-origin: center center;
    color: white;
}
</style>