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
          <MenubarItem>
            Preferences... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Format Currency <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Format Datetime <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarShortcut />
          <MenubarItem>
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
              <MenubarItem>
                Budget <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Transaction <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>
                Transaction from Budget <MenubarShortcut>⇧⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Category <MenubarShortcut>⇧⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>AI Generate mode</MenubarItem>
              <MenubarItem>Note</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            Close Window <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>History</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Update Cloud History</MenubarItem>
              <MenubarItem>Update AI mode</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Organize History...</MenubarItem>
              <MenubarItem>Export History...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Import Budget...</MenubarItem>
              <MenubarItem disabled>Export Budget...</MenubarItem>
              <MenubarItem>Show Duplicate Items</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarItem>
            Import... <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Show in Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
          </MenubarItem>
          <MenubarItem>Convert</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
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
          <MenubarItem>Hide Sidebar</MenubarItem>
          <MenubarItem disabled>
            Enter Full Screen
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="hidden md:block">Account</MenubarTrigger>
        <MenubarContent forceMount>
          <MenubarLabel inset>Switch Account</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Manage Account...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Account...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
