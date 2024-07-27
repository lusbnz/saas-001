import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function Menu() {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Budget Tracker</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About lusbnz</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Preferences... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Currency <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Datetime <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarShortcut />
          <MenubarItem disabled>
            Quit Budget <MenubarShortcut>⌘Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="relative">File</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>New</MenubarSubTrigger>
            <MenubarSubContent className="w-[230px]">
              <MenubarItem disabled>
                Budget <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Transaction <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Category <MenubarShortcut>⇧⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>AI Generate mode</MenubarItem>
              <MenubarItem disabled>Note</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem disabled>
            Close Window <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>History</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem disabled>Update Cloud History</MenubarItem>
              <MenubarItem disabled>Update AI mode</MenubarItem>
              <MenubarSeparator />
              <MenubarItem disabled>Organize History</MenubarItem>
              <MenubarItem disabled>Export History</MenubarItem>
              <MenubarSeparator />
              <MenubarItem disabled>Import Budget</MenubarItem>
              <MenubarItem disabled>Export Budget</MenubarItem>
              <MenubarItem disabled>Show Duplicate Items</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem disabled>
            Import<MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Show in Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
          </MenubarItem>
          <MenubarItem disabled>Convert</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Print<MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Manage</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>Hide Sidebar</MenubarItem>
          <MenubarItem disabled>Enter Full Screen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hidden md:block">Account</MenubarTrigger>
        <MenubarContent forceMount>
          <MenubarLabel inset>Switch Account</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy" disabled>
              Andy
            </MenubarRadioItem>
            <MenubarRadioItem value="benoit" disabled>
              Benoit
            </MenubarRadioItem>
            <MenubarRadioItem value="luis" disabled>
              Luis
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset disabled>
            Manage Account
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset disabled>
            Add Account
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
