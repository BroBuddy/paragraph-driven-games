import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import Instructions from './Instructions'
import HowToPlay from './HowToPlay'
import Equipment from './Equipment'

function Overview() {
    return (
        <section className="flex flex-col py-2 w-full">
            <Tabs defaultValue="calculator">
                <TabsList className="flex flex-row justify-center">
                    <TabButton
                        value="instructions"
                        text="Instructions"
                        width={30}
                    />
                    <TabButton
                        value="howToPlay"
                        text="How To Play"
                        width={30}
                    />
                    <TabButton value="equipment" text="Equipment" width={30} />
                </TabsList>

                <div className="flex flex-col">
                    <TabsContent value="instructions">
                        <Instructions />
                    </TabsContent>

                    <TabsContent value="howToPlay">
                        <HowToPlay />
                    </TabsContent>

                    <TabsContent value="equipment">
                        <Equipment />
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    )
}

export default Overview
