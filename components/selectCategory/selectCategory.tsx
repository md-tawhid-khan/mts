import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectCategory = ({field}) => {
    return (
          <Select onValueChange={field.onChange}
          defaultValue={field.value}
          value={field.value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>website category</SelectLabel>
          <SelectItem value="Business">Business & Corporate</SelectItem>
          <SelectItem value="E-Commerce">E-Commerce</SelectItem>
          <SelectItem value="Personal">Portfolio & Personal Sites</SelectItem>
          <SelectItem value="Blogs">Blogs & News</SelectItem>
          <SelectItem value="Educational">Educational</SelectItem>
          <SelectItem value="Social">Social Platforms</SelectItem>
          <SelectItem value="Travel">Travel & Tourism</SelectItem>
          <SelectItem value="Restaurant">Food & Restaurant</SelectItem>
          <SelectItem value="Organization">Government & Organization</SelectItem>
          <SelectItem value="landingPage">landing page</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
};

export default SelectCategory;