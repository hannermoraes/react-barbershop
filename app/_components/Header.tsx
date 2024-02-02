"use client"

import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { signIn } from "next-auth/react"

const Header = () => {
  const handleLoginClick = async () => {
    await signIn()
  }

  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120}></Image>
        {/* <Button className="p-2 h-8 w-8" variant="outline" size="icon">
          <MenuIcon size={16} />
        </Button> */}

        <Button onClick={handleLoginClick}>Login</Button>
      </CardContent>
    </Card>
  )
}

export default Header