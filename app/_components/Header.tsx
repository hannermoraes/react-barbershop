"use client"

import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const Header = () => {

  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120}></Image>
        <Button className="p-2 h-8 w-8" variant="outline" size="icon">
          <MenuIcon size={16} />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header