"use client"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { MenuIcon } from "lucide-react"
import SideMenu from "./side-menu"

const Header = () => {

  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120}></Image>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="p-2 h-8 w-8" variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

      </CardContent>
    </Card>
  )
}

export default Header