<template>
    <section class="greeting">
        <div class="greeting__content">
            <div>
                <h2>COCKTAIL CATERING</h2>
                <h1>GASTROLI</h1>
                <h3>КОКТЕЙЛИ, КОТОРЫЕ ГОВОРЯТ ЗА НАС.</h3>
            </div>

            <NuxtLink to="#" class="greeting__link">
                <span>
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                    </svg>
                </span>

                <span>Рассчитать<br>стоимость</span>
            </NuxtLink>
        </div>
    </section>

</template>

<style lang="scss" scoped>
* {
    width: fit-content;
}

.greeting {
    width: 100%;
    aspect-ratio: 1423/800;
    color: white;
    background-image: url('/img/2.webp');
    background-size: 100%;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        padding-left: 100px;
    }

    h1 {
        font-family: 'League Gothic';
        font-size: 210px;
        line-height: 170px;
        font-weight: 400;
    }

    h2, h3 {
        font-family: 'Open Sauce', sans-serif;
        font-size: 26px;
        font-weight: 600;
    }
}

.greeting__link {
    display: flex;
    gap: 2px;
    width: 270px;
    height: 64px;
    margin-top: 130px;
    border-radius: 28px;
    overflow: hidden;
    color: white;
    text-decoration: none;

    & span {
        background-color: #9d5c1c;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:last-child {
            width: 100%;
            font-family: 'Open Sauce', sans-serif;
            font-size: 20px;
            font-weight: 500;
        }
    }
}

</style>
