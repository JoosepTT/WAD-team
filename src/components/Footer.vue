<template>
    <div id="footer">
        <div id="copyright">
            <p>© 2025 WAD team:</p>
            <ul>
                <li>Joosep Tiger Tilgar</li>
                <li>Ilja Toropov</li>
                <li>Ken Parijõgi</li>
            </ul>
        </div>
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

#footer #copyright {
    position: absolute;
    text-align: center;
    left: 0;
    padding: 0;
    margin: 0em 1em;
    font-size: 0.8em;
    top: 50%; 
    transform: translateY(-50%);
}

@media (max-width: 900px) {
    #footer #copyright {
        margin-left: 0.5em;
        font-size: 0.8em;
        padding: 0;
    }

    #footer #copyright p {
        padding: 0.25em;
        margin: 0;
    }

    #footer #copyright ul {
        flex-direction: column;
        gap: 0.2em;
        margin: 0em 0.5em;
        padding: 0;
    }
}

@media (max-width: 600px) {
    #footer #copyright {
        font-size: 0.6em;
        margin-left: 0em;
    }
}
</style>