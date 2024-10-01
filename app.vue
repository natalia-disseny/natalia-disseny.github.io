<template>
    <div>
        <Html class="h-full bg-gray-900 text-base antialiased" />
        <Body class="flex min-h-full flex-col">
            <LayoutHeader />

            <div
                class="relative flex flex-auto overflow-hidden rounded-tl-[40px] rounded-tr-[40px] bg-white pt-14">
                <div class="relative isolate flex w-full flex-col pt-9">
                    <main class="w-full flex-auto">
                        <NuxtPage />
                    </main>
                </div>
            </div>

            <p xmlns:cc="http://creativecommons.org/ns#">
                This work is licensed under
                <a
                    href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
                    target="_blank"
                    rel="license noopener noreferrer"
                    style="display: inline-block"
                    >CC BY-NC-SA 4.0<img
                        style="
                            height: 22px !important;
                            margin-left: 3px;
                            vertical-align: text-bottom;
                        "
                        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                        alt="" /><img
                        style="
                            height: 22px !important;
                            margin-left: 3px;
                            vertical-align: text-bottom;
                        "
                        src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                        alt="" /><img
                        style="
                            height: 22px !important;
                            margin-left: 3px;
                            vertical-align: text-bottom;
                        "
                        src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                        alt="" /><img
                        style="
                            height: 22px !important;
                            margin-left: 3px;
                            vertical-align: text-bottom;
                        "
                        src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
                        alt=""
                /></a>
            </p>
        </Body>
    </div>
</template>
