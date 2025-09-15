import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router"

interface Breadcrumb {
  label: string
  to: string
}

interface Props {
  currentPage: string
  breadcrumbs?: Breadcrumb[]
}

export const CustomBreadcrumb = ({ currentPage, breadcrumbs = [] }: Props) => {

  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to='/'>Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {
          breadcrumbs.map(crumb => (
            <div key={crumb.label}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={crumb.to}>{crumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
            </div>
          ))
        }

        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold">{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}