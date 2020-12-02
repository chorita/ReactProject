import React from 'react'
import { Link } from 'react-router-dom';

function Article1() {
    return (
        <div>
            <div class='container' id='article'>
                <main id="article-container" class="wrapper">
                    <h1>Article 1</h1>
                    <h2>November 1, 2020 | 0 Comments</h2>
                    <img src="..\IMG\blog1.jpg" class="img-article" alt='' />
                    <p />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est dolor, finibus eget volutpat varius, aliquet eget risus. Fusce at risus non eros pulvinar dictum ac eget arcu. Fusce efficitur quam pretium tellus facilisis, nec dictum odio volutpat. Proin neque velit, commodo nec elit ut, varius luctus sapien. Phasellus imperdiet ipsum faucibus diam vehicula, eget pellentesque libero blandit. Curabitur ut erat et dui ullamcorper malesuada. Sed vehicula, neque at aliquet finibus, lorem nulla luctus turpis, in iaculis ante libero ac eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur tortor sem, ultricies in leo eu, congue auctor leo.<br />
                        <br />
                        Aliquam erat volutpat. Aliquam placerat blandit sollicitudin. In finibus, augue sit amet lobortis ultrices, metus nisi ultricies neque, non molestie massa neque non diam. Donec vel bibendum tortor. Etiam a metus et enim efficitur feugiat. Suspendisse tincidunt ante at ipsum vehicula posuere. Vestibulum maximus sodales turpis feugiat finibus. Sed eleifend odio diam, nec viverra lorem accumsan at. Vestibulum vitae erat in libero maximus hendrerit a at massa. Donec vehicula venenatis ante, vel dictum magna scelerisque eget. Phasellus commodo fringilla quam, sit amet vestibulum sapien fermentum et. Praesent tortor elit, ornare quis diam in, faucibus blandit est. Cras sodales dui a ligula ultrices congue. Nunc ac libero id massa semper porta.<br />
                        <br />
                        Donec egestas, tellus vitae tristique mattis, lorem sapien tempor ante, vel convallis augue ante hendrerit ex. Vestibulum a pharetra metus, a luctus orci. Ut vehicula sem non nisl imperdiet, ac congue orci aliquam. Nam arcu metus, venenatis sit amet nunc at, placerat aliquam dolor. Fusce eget sapien a nibh tristique faucibus. Aenean tincidunt tempor sem, eget blandit mauris sagittis nec. Ut ac urna vitae ipsum varius maximus sit amet nec ipsum. Nullam hendrerit nibh id quam elementum, a bibendum ipsum porttitor. Sed posuere varius sapien id efficitur.<br />
                        <br />
                        Maecenas a sagittis velit, sed malesuada turpis. Fusce vitae laoreet est. Nulla a nisl aliquet leo hendrerit porttitor sed a nisl. Phasellus vitae lectus a nisl vestibulum facilisis a eu quam. Integer tortor dui, rhoncus faucibus mi eu, varius pulvinar odio. Ut ornare sollicitudin accumsan. Vivamus quis facilisis urna. Nunc nec dignissim lacus, ut eleifend justo. Morbi viverra lacinia turpis, id interdum dui blandit non. Praesent tempor lorem in justo fermentum ultricies. Duis sit amet massa libero.<br />
                        <br />
                        Fusce luctus consequat elit vitae dapibus. Nulla viverra, lectus et commodo pharetra, ante purus consectetur leo, nec imperdiet lorem ligula nec nibh. Curabitur dui magna, iaculis sit amet lorem non, feugiat bibendum sapien. Mauris lectus nisl, finibus non elementum id, consequat vitae metus. Integer non eleifend libero, id mollis leo. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut facilisis eleifend arcu, in finibus risus scelerisque at. Sed eget ultrices elit. Etiam aliquam in leo a suscipit. Fusce orci diam, luctus ut nisl ac, hendrerit gravida risus.<br />
                        <br />
                    <div class="btnjobs-container">
                        <Link to='/' class="btn-jobs">Back to Home</Link>
                    </div>
                    
            </main>
        </div>
        </div>
    )
}

export default Article1;
