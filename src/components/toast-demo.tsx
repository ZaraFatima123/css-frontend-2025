import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Success!",
            description: "Your action was completed successfully.",
            variant: "default",
          })
        }}
      >
        Show Success Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh!",
            description: "Something went wrong.",
            variant: "destructive",
          })
        }}
      >
        Show Error Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          const { dismiss } = toast({
            title: "Loading...",
            description: "Please wait while we process your request.",
          })

          // Simulate loading and update
          setTimeout(() => {
            dismiss()
            toast({
              title: "Completed",
              description: "The process has finished!",
            })
          }, 3000)
        }}
      >
        Show Loading Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Custom Action",
            description: "This toast has a custom action button.",
            action: (
              <Button variant="secondary" size="sm">
                Undo
              </Button>
            ),
          })
        }}
      >
        Show Action Toast
      </Button>
    </div>
  )
}
