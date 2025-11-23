<template>
    <div id="footer">
        <ul id="copyright">
            <li>© 2025 WAD team:</li>
            <li>Joosep Tiger Tilgar</li>
            <li>Ilja Toropov</li>
            <li>Ken Parijõgi</li>
        </ul>
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
    position: relative;
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

#footer > ul a {
    font-size: 1.5em;
    color: white;
}

#copyright {
    position: absolute;
    gap: 0em;
    padding: 0;
    margin: 0;
    font-size: 0.8em;
    top: 50%; 
    transform: translateY(-50%);
}

@media (max-width: 720px) {
    #footer #copyright {
        display: none;
    }
}
</style>