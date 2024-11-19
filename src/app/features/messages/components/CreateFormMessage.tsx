import { Form, FormField, FormControl, FormMessage, FormLabel } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { type CreateFormSchema, createFormSchema } from '../form/form-schema';

export function CreateFormMessage() {
  const form = useForm<CreateFormSchema>();
  return (
    <h1>...</h1>
  )
}
