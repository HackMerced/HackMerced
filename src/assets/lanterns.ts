import { THREE } from "https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.js";
export module LanternAnimation {
    // Import background texture
    const bgtexture = new THREE.TextureLoader().load("HM_tower.png");

    // Setup scene
    var scene = new THREE.Scene();
    scene.background = bgtexture;

    // Setup camera
    var camera = new THREE.PerspectiveCamera(
        75, // field of view
        window.innerWidth / window.innerHeight, // aspect ratio
        0.1, // near plane
        1000 // far plane
    );
    camera.position.z = 5; // set z position of camera

    // Setup renderer
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor("#000000", 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Makes scene visible on browser
    document.body.appendChild(renderer.domElement);

    // Resizes canvas when screen is resized
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = (window.innerWidth / window.innerHeight);
        camera.UpdateProjectionMatrix();
    })

    // Add raycaster for shape interaction
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    // Define shape
    var geometry = new THREE.IcosahedronGeometry(1.5, 0); // radius, detail
    var material = new THREE.MeshPhongMaterial({ color: 0xFEB979 });

    // Add multiple shapes to the scene
    for (var i = 0; i < 15; i++) {
        var shape = new THREE.Mesh(geometry, material);

        /*  Randomly chooses a position:
            A number -0.5 to 0.5 scaled differently in different dimensions  */
        shape.position.x = (Math.random() - 0.5) * 40;
        shape.position.y = (Math.random() - 0.5) * 8;
        shape.position.z = (Math.random() + 0.2) * -5;

        // Configures shadows
        shape.castShadow = true;
        shape.receiveShadow = true;

        scene.add(shape);
    }

    // Add directional light
    var dLight = new THREE.DirectionalLight(0x00A3FF, 0.6); // color, intensity
    dLight.position.set(10, 0, 25); // x, y, z
    scene.add(dLight);

    // Add ambient light
    var aLight = new THREE.AmbientLight(0xFF002E, 0.6); // color, intensity
    scene.add(aLight);

    // Add mouse light
    var mLight = new THREE.PointLight(0xE9BE91, 0.8); // color, intensity, distance
    mLight.position.set(0, 0, -2.5); // x, y, z
    scene.add(mLight);
    mLight.castShadow = true;

    // Every frame, do this
    var render = function () {
        requestAnimationFrame(render);

        // If light is not completely dimmed, slowly dim light
        if (mLight.intensity > 0) {
            mLight.intensity -= 0.005;
        }

        var intersects = raycaster.intersectObjects(scene.children, true);
        for (var i = 0; i < intersects.length; i++) {
            intersects[i].object.rotation.x += 0.05;
            //intersects[i].object.material.color.set(0xEAFEFF);
        }

        renderer.render(scene, camera);
    }

    // Every mouse movement
    function onMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        // Moves light according to mouse position
        mLight.position.set(mouse.x * 16, mouse.y * 9, -1);
        mLight.intensity = 0.8;
    }

    render();

    window.addEventListener('mousemove', onMouseMove);

};
